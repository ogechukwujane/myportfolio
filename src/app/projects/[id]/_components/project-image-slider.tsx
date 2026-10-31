"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";

const SLIDE_DURATION = 6000;

type ProjectImageSliderType = {
  images: string[];
  children: ReactNode;
};

export const ProjectImageSlider = ({
  images,
  children,
}: ProjectImageSliderType) => {
  const total = images.length;
  const hasMultiple = total > 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const current = total ? activeIndex % total : 0;
  const autoplay = hasMultiple && !reducedMotion;

  // Respect the user's "reduce motion" setting
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const goNext = useCallback(() => {
    if (total) setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <section
      className="pattern relative isolate flex min-h-[500px] items-end justify-center overflow-hidden bg-neutral-950 md:min-h-[600px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Progress animation. The bar's own animation drives the slide change,
          so the timer and the visual can never drift apart. */}
      <style>{`
        @keyframes project-slider-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      {/* Background images */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {images.map((image, index) => {
          const isActive = current === index;
          return (
            <Image
              key={`${image}-${index}`}
              src={image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-[opacity,transform] duration-[1400ms] ease-out motion-reduce:transition-none ${
                isActive ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
              }`}
            />
          );
        })}

        {/* Layer 1: even tint, calms down very bright screenshots */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Layer 2: softens fine detail right behind the text. It is masked, so
            there is no visible edge where the blur ends. */}
        <div
          className="absolute inset-x-0 bottom-0 h-[68%] backdrop-blur-[6px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, #000 0%, #000 35%, transparent 100%)",
            maskImage:
              "linear-gradient(to top, #000 0%, #000 35%, transparent 100%)",
          }}
        />

        {/* Layer 3: eased dark scrim. Many stops give a smooth ramp with no
            hard band, and it is dark enough for white text even on a pure
            white image. */}
        <div
          className="absolute inset-x-0 bottom-0 h-[75%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.88) 18%, rgba(0,0,0,0.76) 34%, rgba(0,0,0,0.58) 50%, rgba(0,0,0,0.36) 67%, rgba(0,0,0,0.15) 83%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Content: text on the scrim at the bottom centre, controls underneath */}
      <div className="container relative z-10 pb-8 pt-24">
        <div className="mx-auto w-full max-w-[620px] text-center">
          {children}
        </div>

        {hasMultiple && (
          <div className="mt-7 flex items-center justify-center gap-4">
            <div
              className="flex w-full max-w-[220px] items-center gap-2"
              role="group"
              aria-label="Project screenshots"
            >
              {images.map((_, index) => {
                const isActive = current === index;
                const isDone = index < current;
                const animate = isActive && autoplay;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show screenshot ${index + 1} of ${total}`}
                    aria-current={isActive}
                    className="group relative h-5 flex-1 focus-visible:outline-none"
                  >
                    <span className="absolute inset-x-0 bottom-2 h-[3px] overflow-hidden rounded-full bg-white/35 transition-all group-hover:h-1 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black">
                      <span
                        className="absolute inset-0 origin-left rounded-full bg-white"
                        style={{
                          transform:
                            isDone || (isActive && !autoplay)
                              ? "scaleX(1)"
                              : "scaleX(0)",
                          animation: animate
                            ? `project-slider-fill ${SLIDE_DURATION}ms linear forwards`
                            : undefined,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                        onAnimationEnd={animate ? goNext : undefined}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs tabular-nums text-white/80" aria-live="off">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
