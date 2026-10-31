import { Experiences } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import { AnimateY } from "./animation-components/animateY";
import { txtAnim, txtConAnim } from "./animation-components/global";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className=" pb-[100px]" id="about">
      <div className="container pt-[60px]">
        <AnimateY initial="hidden" animate="visible">
          <motion.h2 variants={txtAnim} className="section_header">
            About me
          </motion.h2>

          <motion.p variants={txtAnim} className="txt  mt-[10px] sub_title">
            A curated overview of my professional journey, highlighting my
            experience in building innovative web and mobile applications and
            delivering exceptional user experiences.
          </motion.p>
        </AnimateY>

        <div className="mt-[50px] space-y-[50px]">
          {Experiences.map((i, key) => {
            return (
              <div key={key}>
                <AnimateY>
                  <div className="flex justify-between max-[900px]:flex-col gap-[3px]">
                    <div className="flex-[1]">
                      <motion.span
                        variants={txtAnim}
                        className="text-[16px] font-medium text-primary"
                      >
                        {i.date}
                      </motion.span>
                    </div>
                    <motion.div variants={txtAnim} className="flex-[2]">
                      <h5 className="font-semibold font-lobster  text-primary capitalize text-lg">
                        {i.role}
                      </h5>

                      <h4
                        className="text-[20px] font-poppins font-bold text-dark pt-[5px] company_name"
                        dangerouslySetInnerHTML={{ __html: i.title }}
                      />

                      <div
                        className="txt pt-[10px]  py-[15px] [&>h4]:text-[16px] [&>h4]:font-[600] [&>h4]:mt-5 [&>ul]:mt-2 [&>ul]:flex-col [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5"
                        dangerouslySetInnerHTML={{ __html: i.description }}
                      />
                      <div>
                        <h4 className="!font-[600] txt !text-[16px] ">
                          Skills:
                        </h4>
                        <div className="flex items-center  gap-[15px] flex-wrap mt-2 ">
                          {i.skills.map((i, key) => {
                            return (
                              <span
                                key={key}
                                className="py-[10px] font-sourcesSans rounded-[5px] px-[20px] text-[14px] text-light  font-semibold bg-background2 max-sm:text-[14px]"
                              >
                                {i}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimateY>
              </div>
            );
          })}
        </div>

        <AnimateY initial="hidden" animate="visible" varient={txtConAnim}>
          <div className="mt-[70px] flex justify-center">
            <Link href={"/Ogechukwu_Gerald-Ikedinma_Resume.pdf"}>
              <button className="btn">Download cv</button>
            </Link>
          </div>
        </AnimateY>
      </div>
    </div>
  );
};

export default AboutSection;
