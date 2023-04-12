import React from "react";
import { FaFacebook, FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
interface ContactProps {
  isVisible: boolean;
  toggleContact: () => void;
}

export default function SideBar({ isVisible, toggleContact }: ContactProps) {
  // if (typeof window !== "undefined") {
  //   const content = document.getElementById("content");
  //   if (isVisible) {
  //     content?.classList.add("content-disable");
  //   } else {
  //     content?.classList.remove("content-disable");
  //   }
  // }
  return (
    /* flex con */
    <div
      className={`p-6 md:p-16 lg:p-24 absolute bg-[#242424]  m-auto  overflow-hidden items-center justify-center md:flex-row flex flex-col  
     z-[99]  transition-all duration-100 delay-0  ${
       isVisible ? " h-screen w-full scale-100 " : "scale-0 h-0 w-0 "
     }  `}
    >
      {/* for med screen */}

      {/* first col */}
      <div
        className={` md:w-1/2 h-full hidden md:flex relative  justify-center  ${
          isVisible
            ? "translate-x-0 md:translate-y-0"
            : "-translate-x-full md:-translate-y-full"
        } duration-200 delay-200 transition-all  bg-opacity-90  bg-bgDark `}
      >
        <form className="w-4/5 my-16 flex flex-col">
          <h1 className="font-bold text-3xl mb-5">Get in touch</h1>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
          />
          <label htmlFor="" className="mt-5 ">
            Email
          </label>
          <input
            type="email"
            className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
          />

          <label htmlFor="" className=" mt-5">
            Message
          </label>

          <textarea className="border-none outline-none text-bgDark py-1 px-2 focus:border-none" />
          <input
            type="text"
            className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
          />
          <button type="submit" className="my-3 hover:border py-2 bg-pink-900">
            Submit
          </button>

          <a
            href="../../public/ME.jpg"
            download="arlie-torres-cv"
            className="absolute flex bottom-12 items-start py-2 underline  justify-center "
          >
            Download CV <FaFile className="w-5 h-5 " />
          </a>
        </form>
      </div>
      {/* second col */}

      <div
        className={`md:w-1/2 h-full relative bg-slate-800 hidden md:flex justify-center  ${
          isVisible
            ? "md:translate-y-0 translate-x-0"
            : "translate-x-full md:translate-y-full"
        } duration-200 delay-200 transition-all bg-opacity-90  `}
      >
        <div className="w-4/5 my-16 flex flex-col items-center justify-center">
          <iframe
            src="https://embed.lottiefiles.com/animation/91743"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* phones  */}
      <form
        action="https://formsubmit.co/torresarlie22@gmail.com"
        method="POST"
        className="md:hidden w-4/5 my-16 flex flex-col"
      >
        <h1 className="font-bold text-3xl mb-5">Get in touch</h1>
        <label htmlFor="">Your name</label>
        <input
          type="text"
          className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
        />
        <label htmlFor="" className="mt-5 ">
          Email
        </label>
        <input
          type="email"
          className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
        />

        <label htmlFor="" className=" mt-5">
          Message
        </label>

        <textarea className="border-none outline-none text-bgDark py-1 px-2 focus:border-none" />
        <input
          type="text"
          className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
        />
        <button type="submit" className="my-3 hover:border py-2 bg-pink-900">
          Submit
        </button>

        <a
          href="../../public/ME.jpg"
          download="arlie-torres-cv"
          className=" flex items-start my-6 py-2 underline  justify-center "
        >
          Download CV <FaFile className=" w-5 h-5 " />
        </a>
      </form>

      <button
        onClick={toggleContact}
        className="absolute  w-8 h-8 flex justify-center items-center hover:rounded-full  text-gray-400 right-6 hover:bg-slate-300   top-6 cursor-pointer text-4xl"
      >
        x
      </button>
    </div>
  );
}
