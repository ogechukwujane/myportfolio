import { socails } from "@/lib/constants";
import Link from "next/link";
import { getIcon } from "./icons";

export const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();
  return (
    <div className="bg-dark pt-[50px] pb-[40px]">
      <div className="container">
        <div className="flex justify-between max-[700px]:flex-col gap-[20px]">
          <div>
            <h2 className="font-[900] uppercase font-poppins text-[20px] text-white  ">
              Ogechukwu Gerald-Ikedinma.
            </h2>

            <p className=" mt-[10px] font-sourcesSans max-w-[600px] text-background text-[16px] leading-[25px]">
              Problem-solving Software Developer who thrives on turning complex
              design concepts into functional digital experiences.
            </p>
          </div>

          <div className="">
            <h3 className="text-white font-bold font-poppins text-[20px] uppercase">
              social
            </h3>
            <div className="flex gap-[20px] mt-[10px]">
              {socails.map((i, key) => {
                return (
                  <Link
                    href={i.link}
                    className="flex text-white text-[20px] hover:text-primary  hover:shadow transition-all duration-500 "
                    target="_blank"
                    key={key}
                  >
                    {getIcon(i.icon)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-[30px]">
          <p className="text-[15px] text-gray-400 text-center mt-[20px]">
            &copy;{" "}
            <span className="text-primary text-[15px]">
              Ogechukwu Gerald-Ikedinma
            </span>{" "}
            {y}
          </p>
        </div>
      </div>
    </div>
  );
};
