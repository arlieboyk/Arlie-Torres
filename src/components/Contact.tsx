import React, { useEffect } from "react";
import { FaFacebook, FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
interface ContactProps {
  isVisible: boolean;
  toggleContact: () => void;
}

export default function SideBar({ isVisible, toggleContact }: ContactProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const content = document.getElementById("content");
      if (isVisible) {
        document.body.classList.toggle("disable-scroll");
      } else {
        document.body.classList.toggle("disable-scroll");
      }
    }
  }, [isVisible]);

  return (
    /* flex con */
    <div
      className={`p-6 md:p-16 lg:p-24 absolute bg-[#242424] bg-opacity-90  m-auto  overflow-hidden items-center justify-center md:flex-row flex flex-col  
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
        } duration-200 delay-200 transition-all  bg-opacity-100  bg-bgDark `}
      >
        <form className="w-4/5 my-16 flex flex-col">
          <label htmlFor="">Your name</label>
          <input
            type="text"
            className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
          />
          <label htmlFor="" className="mt-5">
            Email
          </label>
          <input
            type="email"
            className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
          />

          <label htmlFor="" className="mt-5">
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
        className={`md:w-1/2 h-full relative  bg-opacity-100 bg-slate-800 hidden md:flex justify-center  ${
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
      <form className="w-4/5 md:hidden flex flex-col">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
        />
        <label htmlFor="email" className="mt-5">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
        />

        <label htmlFor="message" className="mt-5">
          Message
        </label>

        <textarea className="border-none outline-none text-bgDark py-1 px-2 focus:border-none" />
        <input
          id="message"
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

      <button
        onClick={toggleContact}
        className="absolute  w-8 h-8 flex justify-center items-center duration-200 hover:bg-slate-500 rounded-full text-gray-200  right-6 bg-slate-300   top-6 cursor-pointer text-4xl"
      >
        <GrFormClose className="w-6 h-6  " />
      </button>
    </div>
  );
}
