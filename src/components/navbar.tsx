"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { navLinks } from "../lib/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <>
      <nav className="bg-white py-[20px] fixed top-0 left-0 right-0 shadow z-40 ">
        <div className="container  flex justify-between items-center">
          {/* logo section */}
          <Link href={"/"} className="flex items-center gap-[10px]">
            <div className="border-[3px] flex items-center justify-center border-primary rounded-full w-[42px] h-[42px] p-[2px] overflow-hidden">
              <Image
                src={"/profile.jpeg"}
                width={40}
                height={40}
                alt="profile image"
                className="size-full rounded-full "
              />
            </div>
          </Link>

          {/* Links section */}
          <div>
            <span
              onClick={() => setOpenSideNav(!openSideNav)}
              className="text-[25px] cursor-pointer text-dark min-[700px]:hidden"
            >
              {!openSideNav ? <IoIosMenu /> : <IoClose />}
            </span>

            {/* All links */}
            <div className="">
              <div className="flex items-center gap-[50px] max-[700px]:hidden">
                {navLinks.map((i, key) => {
                  return (
                    <Link
                      key={key}
                      href={i.path}
                      className="uppercase  font-bold text-[15px] text-light hover:text-primary transition-all !font-poppins "
                    >
                      {i.name}
                    </Link>
                  );
                })}
              </div>

              {/* mobile nav */}
              <div
                className={cn(
                  "hidden w-full z-30   bg-background shadow fixed top-[80px] right-0 transition-all  ease-in-out delay-200 overflow-hidden  max-[700px]:block",
                  openSideNav ? "h-[270px]" : "h-0  ",
                )}
              >
                {/* close btn */}
                <div className="flex flex-col w-full ">
                  {navLinks.map((i, key) => {
                    return (
                      <Link
                        key={key}
                        href={i.path}
                        className={cn(
                          "uppercase font-bold font-poppins text-light hover:text-dark border-t border-gray-300 w-full py-[20px]  text-end px-[30px] ",
                        )}
                        onClick={() => setOpenSideNav(false)}
                      >
                        {i.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "hidden h-screen w-full bg-dark fixed top-0 left-0 right-0 bottom-0 z-20  max-[700px]:block transition-opacity",
          openSideNav
            ? "opacity-[0.4] pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpenSideNav(false)}
      />
    </>
  );
};
