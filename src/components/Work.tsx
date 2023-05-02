import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaLongArrowAltDown } from "react-icons/fa";
import buraindoFirst from "../../public/work/buraindo1.png";
export default function Work() {
  return (
    <div className="dark:bg-[#222222] flex h-auto my-12 justify-center items-center mx-auto  text-black">
      {/* buraindo-1 */}

      <div className="w-10/12 h-auto relative   inset-0 m-auto shadow  bg-white ">
        <Image
          src={buraindoFirst}
          alt=""
          width={1000}
          height={1000}
          className="h-auto w-auto"
        />
        <div className="absolute left-[2rem] md:left-[4rem] top-[0.5rem] md:bottom-10 m-auto text-slightDark">
          <h2 className="font-bold text-2xl md:text-5xl ">Buraindo</h2>
          <p>A mobile application for controlling Iot devices</p>
        </div>
        <Link
          href="/buraindo"
          className="absolute -right-5 md:-right-20 bottom-[2rem] md:bottom-[5rem]  w-[8rem]  transition-all duration-300 hover:scale-105 text-textColor px-4 z-10 py-3 max-w-lg   bg-gradient-to-r hover:transition-colors
               from-[#ef3837] font-bold to-[#f06047]"
        >
          Visit work
          <FaArrowRight className="text-white absolute flex  m-auto right-2 top-0 bottom-0" />
        </Link>
        <div className="w-2/4 space-x-1   flex-wrap text-center py-2  text-white">
          <span className=" bg-bgBlue/60 rounded py-1 px-2">React-Native</span>
          <span className=" bg-bgBlue/60 rounded py-1 px-2"> Figma</span>
          <span className=" bg-bgBlue/60 rounded py-1 px-2">
            Firebase - Realtime
          </span>
        </div>
      </div>

      {/* second work */}
      {/* <FarmCyle/> */}
    </div>
  );
}
