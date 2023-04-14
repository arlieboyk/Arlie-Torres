import React, { useEffect, useState } from "react";
import { FaFacebook, FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import Input from "./Input";
import Link from "next/link";
interface ContactProps {
  isVisible: boolean;
  toggleContact: () => void;
}

export default function SideBar({ isVisible, toggleContact }: ContactProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const content = document.getElementById("content");
      if (isVisible === true) {
        document.body.classList.toggle("disable-scroll");
      } else {
        document.body.classList.toggle("disable-scroll");
      }
    }
  }, [isVisible]);

  const submitHandler = async (event: any) => {
    event.preventDefault();

    await fetch("/api/usermessages", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
    });
  };

  return (
    /*  container */
    <div
      className={`p-6 md:p-16 lg:p-24 absolute bg-bgDark md:bg-[#242424] bg-opacity-90  m-auto  overflow-hidden items-center justify-center md:flex-row flex flex-col  
     z-[99]  transition-all duration-100 delay-0  ${
       isVisible ? " h-screen w-full   scale-100 " : "scale-0 h-0 w-0 "
     }  `}
    >
      {/* flex container */}
      <div className="flex h-5/6 w-full items-center justify-center lg:w-10/12">
        {/* for med screen */}
        {/* first col */}
        <div
          className={`w-full md:w-1/2 h-full  flex relative  items-center   justify-center  ${
            isVisible
              ? "translate-x-0 md:translate-y-0"
              : "-translate-x-full md:-translate-y-full"
          } duration-200 delay-200 transition-all  bg-opacity-100  bg-bgDark `}
        >
          <form className="flex w-4/5 justify-center  md:w-3/5  flex-col space-y-2 mt-6">
            <label htmlFor="">Name</label>
            <Input
              className="w-full h-[2rem] my-16 flex flex-col"
              type="name"
              required
              autofocus
              value={name}
              id="name"
              onChange={(e: any) => setName(e.target.value)}
            />
            <label htmlFor="">Email</label>

            <Input
              className="w-full h-[2rem] my-16 flex flex-col"
              type="email"
              required
              autofocus
              value={email}
              id="email"
              onChange={(e: any) => setEmail(e.target.value)}
            />

            <label htmlFor="">Message</label>
            <textarea
              id="message"
              value={message}
              className="w-full h-[2rem] my-16 flex flex-col rounded-md border-none  text-gray-600 py-1 px-3"
              onChange={(e: any) => setMessage(e.target.value)}
              rows={4}
              required
              autoFocus
            />

            <button
              // type="submit"
              onClick={submitHandler}
              className="my-3 mt-6 hover:border py-2 bg-pink-900 rounded-md w-full"
            >
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
        {/*     <form className="w-4/5 my-16 flex md:hidden flex-col">
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
        </form> */}

        <button
          onClick={toggleContact}
          className="absolute  w-8 h-8 flex justify-center items-center duration-200 hover:bg-slate-500 rounded-full text-gray-200  right-6 bg-slate-300   top-6 cursor-pointer text-4xl"
        >
          <GrFormClose className="w-6 h-6  " />
        </button>
      </div>
    </div>
  );
}
