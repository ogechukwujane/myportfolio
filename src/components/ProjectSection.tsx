import { Projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimateY } from "./animation-components/animateY";
import { motion } from "framer-motion";
import { txtAnim, txtConAnim } from "./animation-components/global";
import { AnimateXY } from "./animation-components/animateXY";
import { AnimateXY2 } from "./animation-components/animateXY2";

const ProjectSection = () => {
  return (
    <div className=" pt-[60px] pb-[80px] bg-white" id="projects">
      <div className="container">
        <AnimateY initial="hidden" animate="visible">
          <motion.h2 className="section_header">Recently Completed</motion.h2>
          <motion.p variants={txtAnim} className="sub_title txt mt-[10px]">
            These are some of the projects I’ve recently completed as a Senior
            Frontend Developer.
          </motion.p>
        </AnimateY>

        <div className="mt-[70px] space-y-[180px] max-[900px]:space-y-[80px]">
          {Projects.slice(0, 1).map((i, key) => {
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

        <AnimateY initial="hidden" animate="visible" varient={txtConAnim}>
          <div className="mt-[50px] max-sm:mt-[40px] text-center">
            <Link
              href={"/projects"}
              className="decoration-light underline font-bold text-light hover:decoration-primary hover:text-primary text-[20px]"
            >
              See more projects
            </Link>
          </div>
        </AnimateY>
      </div>
    </div>
  );
};

export default ProjectSection;
