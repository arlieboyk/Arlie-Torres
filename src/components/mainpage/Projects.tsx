import React from "react";
import Work from "../Work";

export default function Projects() {
  return (
    <section className="bg-slate-200 w-full h-auto relative  md:px-20 py-20">
      <div className="absolute flex flex-col  items-center justify-center w-20 h-auto md:-top-20 -top-[7rem] left-0 right-0 mx-auto">
        <a
          href="#work"
          className="text-[#222222] dark:text-textColor hover:text-2xl font-serif delay-100 duration-100 transition-all ease-linear text-xl"
        >
          Works
        </a>
        <div className="h-[15rem] bg-slate-300 w-0.5"></div>
      </div>
      <h2 id="work" className="font-bold text-slightDark text-5xl text-center">
        Latest Work
      </h2>
      <Work />
      <Work />
 
    </section>
  );
}
