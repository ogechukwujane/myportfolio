"use client";

import { AnimateXY } from "@/components/animation-components/animateXY";
import { AnimateXY2 } from "@/components/animation-components/animateXY2";
import { Projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = () => {
  return (
    <div className="pt-[150px] pb-[100px] ">
      <div className="container space-y-[150px] max-[500px]:space-y-[100px]">
        {Projects.map((i, key) => {
          return (
            <div
              key={key}
              className="flex gap-[30px] items-center max-[900px]:flex-col "
            >
              <div className="flex-1">
                <AnimateXY2 initial="hidden" animate="visible">
                  <Image
                    src={i.unboardImage}
                    width={1000}
                    height={1000}
                    alt={"image"}
                    className="size-full"
                  />
                </AnimateXY2>
              </div>

              <div className="flex-1">
                <AnimateXY initial="hidden" animate="visible">
                  <h3 className="sub_head_text max-[900px]:text-center">
                    {i.title}
                  </h3>
                  <p className="txt py-[15px] max-[900px]:text-center">
                    {i.shortDesc}
                  </p>
                  <div className="max-[900px]:flex justify-center">
                    {" "}
                    <Link href={`/projects/${i.id}`}>
                      <button className="btn">Read more</button>
                    </Link>
                  </div>
                </AnimateXY>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default projects;
