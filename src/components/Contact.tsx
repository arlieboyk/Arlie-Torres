import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
interface ContactProps {
  isVisible: boolean;
  toggleContact: () => void;
}

export default function SideBar({ isVisible, toggleContact }: ContactProps) {
  if (typeof window !== "undefined") {
    const content = document.getElementById("content");
    if (isVisible) {
      content?.classList.add("content-disable");
    } else {
      content?.classList.remove("content-disable");
    }
  }
  return (
    /* flex con */
    <div
      className={` absolute inset-6 m-atuo overflow-hidden md:flex-row  opacity-100 flex flex-col  
     z-[99] md:m-auto transition-all duration-100 delay-0  ${
       isVisible ? " h-screen w-full scale-100 " : "scale-0 h-0 w-0 "
     }  `}
    >
      <p
        onClick={toggleContact}
        className="absolute  m-auto cursor-pointer text-4xl"
      >
        x
      </p>

      {/* first col */}
      <div
        className={`w-1/2  ${
          isVisible
            ? "translate-x-0 md:translate-y-0"
            : "-translate-x-full md:-translate-y-full"
        } duration-200 delay-200 transition-all  bg-slate-900/20`}
      ></div>
      {/* second col */}
      <div
        className={`w-1/2   ${
          isVisible
            ? "md:translate-y-0 translate-x-0"
            : "translate-x-full md:translate-y-full"
        } duration-200 delay-200 transition-all  bg-blue-900/20`}
      ></div>
    </div>

    // <div
    //   className={`absolute h-full  top-0   ${
    //     isVisible ? " translate-x-0" : "delay-300 -translate-x-full"
    //   } z-[99] h-screen w-full  bg-blue-400 transition-transform`}
    // >
    //   <div
    //     className={` bg-bgDark z-10 relative h-screen w-full flex flex-col justify-center items-center   transition-all  top-0  ${
    //       isVisible
    //         ? " translate-x-0  delay-300"
    //         : "duration-100 -translate-x-full "
    //     } `}
    //   >
    //     <GrFormClose
    //       color="#ffffff"
    //       className="w-10 h-10 bg-slightDark hover:scale-105  cursor-pointer rounded-full hover:text-white hover:bg-slightDark  p-2 absolute top-3 right-2"
    //       onClick={toggleContact}
    //     />

    //     <div className="flex absolute left-0 right-0 mx-auto bottom-[5rem] justify-center items-center space-x-6">
    //       <a href="https://www.facebook.com/liboy12/" target="_blank">
    //         <FaFacebook className="w-8 h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/arlie-torres-18946a258/"
    //         target="_blank"
    //       >
    //         <FaLinkedin className="w-8 h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
    //       </a>
    //       <a href="https://github.com/arlieboyk" target="_blank">
    //         <FaGithub className="w-8 h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
