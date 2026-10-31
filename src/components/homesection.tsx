import { socails } from "@/lib/constants";
import Link from "next/link";
import { getIcon } from "./icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { animateX, txtAnim, txtConAnim } from "./animation-components/global";
import { BsArrowRight } from "react-icons/bs";

const Herosection = () => {
  return (
    <div className=" h-[800px] pt-[50px] max-sm:pt-0 max-sm:min-h-[650px]  w-full pattern">
      <div className="container  flex items-center h-full ">
        <motion.div
          className="flex-1 relative"
          variants={txtConAnim}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={txtAnim}
            className="capitalize head_text max-[500px]:flex flex-col "
          >
            Ogechukwu Gerald-Ikedinma
          </motion.h1>

          <motion.h2
            variants={txtAnim}
            className="text-primary font-lobster capitalize font-extrabold text-xl md:text-2xl pt-3"
          >
            Software Developer
          </motion.h2>

          <motion.p variants={txtAnim} className=" py-[15px] txt">
            I am Frontend Engineer with experience in building scalable web and
            mobile applications using React, Next.js, React Native, TypeScript
            and modern frontend technologies. Experienced in SaaS, enterprise,
            fintech and e-commerce products with strong skills in responsive UI
            development, REST API integration, debugging, performance
            optimisation, clean code and cross-functional collaboration.
            Passionate about technology, problem-solving and continuous
            learning.
          </motion.p>

          <motion.div
            variants={txtAnim}
            className="flex  items-center gap-[30px] mt-[10px]"
          >
            {socails.map((i, key) => {
              return (
                <Link
                  href={i.link}
                  className="flex h-[53px] bg-white px-[20px] items-center justify-center rounded-[5px] hover:translate-y-[-5px] hover:shadow transition-all duration-500  hover:text-primary"
                  target="_blank"
                  key={key}
                >
                  {getIcon(i.icon)}
                </Link>
              );
            })}
          </motion.div>

          <Link
            href={"https://www.assetsmfb.com"}
            target="_blank"
            className="absolute -bottom-[130px] max-lg:!relative max-lg:-bottom-12"
          >
            <motion.div
              variants={txtAnim}
              className="flex  items-center gap-[15px] mt-[10px] bg-white p-[10px] rounded-md w-fit cursor-pointer group transition-all"
            >
              <Image
                src="/latest-company.png"
                alt="Current company logo"
                height={40}
                width={40}
                className="rounded-md overflow-hidden"
              />

              <div>
                <p className="text-primary text-[14px] ">
                  Currently working at:
                </p>
                <h3 className="font-bold text-[15px] font-poppins">
                  Pozse Inc
                </h3>
              </div>

              <div className="text-[15px] text-primary group-hover:ml-3 transition-all">
                <BsArrowRight />
              </div>
            </motion.div>
          </Link>
        </motion.div>
        {/* IMAGE SECTION */}
        <motion.div
          variants={animateX}
          initial="hidden"
          animate="visible"
          className="flex-1 max-lg:hidden flex items-center justify-center"
        >
          <Image
            src={"/profile.jpeg"}
            width={1000}
            height={1000}
            alt="profile image"
            className="profile_img  size-[400px] border-4 border-primary p-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
