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
        <div className="w-4/5 my-16 flex flex-col">
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
        </div>
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
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            id="uuid-e45b9967-50c0-4be5-afde-757a88b4bb27"
            viewBox="0 0 888 342.09"
            className="absolute inset-0 m-auto injected-svg ClassicGrid__ImageFile-sc-td9pmq-4 fNAcXv grid_media"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="m560.17,337.74l-141.49-4.02s10.65-63.71-23.52-81.39c-23.29-12.06-43.96-68.39-38.08-106.72.08-.51.16-1.02.25-1.52,2.98-17.16,11.5-30.45,27.79-34.06,52.66-11.66,90.24-2.62,90.24-2.62,0,0,8.7.11,21.59,2.53.46.08.92.17,1.38.27,36.49,7.15,103.94,32.61,106.86,123.01,4.02,124.2-45.02,104.5-45.02,104.5Z"
              fill="#3f3d56"
            ></path>
            <path
              d="m496.95,109.95c-.24,6.48-1.71,12.92-4.39,19.04-5.56,12.69-15.7,22.38-28.54,27.29-38.46,14.72-83.34.12-106.04-15.71-.09.5-1.89,9.99-1.97,10.5,10.05,6.88,59.24,13.51,68.57,13.51,14.17,0,27.81-2.35,39.94-7,13.19-5.05,23.6-15.01,29.31-28.04,2.73-6.22,4.23-12.75,4.5-19.33-.46-.1-.92-.19-1.38-.27,0,0,0,0,0,0Z"
              fill="#6c63ff"
            ></path>
            <path
              d="m507.41,118.2l-22.55-56.71s27.07-46.4,5.8-51.55c-21.27-5.16-43.18,22.55-43.18,22.55,0,0-40.6-14.18-56.06-2.58,0,0-25.78-36.09-41.24-29-15.47,7.09,5.5,58.18,5.5,58.18,0,0-31.92,46.86-7.43,73.92,24.49,27.07,116.64,48.98,159.17-14.82h0Z"
              fill="#3f3d56"
            ></path>
            <path
              d="m1,336.08h887v-2H1c-.55,0-1,.45-1,1h0c0,.55.45,1,1,1Z"
              fill="#3f3d56"
            ></path>
            <path
              d="m555.78,303.8c7.68,3.42,15.7,6.9,24.1,6.57s17.23-5.74,18.54-14.04c.68-4.29-.66-8.88.98-12.9,2.21-5.4,9.33-7.49,14.86-5.64,5.54,1.85,9.6,6.63,12.52,11.68,5.46,9.46,7.64,21.88,1.79,31.1-5.07,7.99-14.69,11.61-23.63,14.71-11.92,4.13-25.22,8.22-36.77,3.15-11.61-5.1-17.94-19.83-13.64-31.76"
              fill="#3f3d56"
            ></path>
            <path
              d="m428.74,92.71s-13.88-5.55-22.89,1.39l10.41,15.96s12.49-17.34,12.49-17.34Z"
              fill="#6c63ff"
            ></path>
            <path
              d="m355.89,165.55l25.67,136.68s-38.85,39.55,11.1,38.85c49.95-.69,35.38-26.36,35.38-26.36l-15.96-118.64"
              fill="#3f3d56"
            ></path>
            <path
              d="m391.4,342.09c-13.53,0-21.71-3.1-24.33-9.23-4.77-11.16,10.76-28.17,13.42-30.97l-17.26-102.18,1.97-.33,17.43,103.18-.36.36c-.18.18-17.94,18.45-13.36,29.15,2.35,5.5,10.32,8.19,23.74,8,18.65-.26,30.67-4.17,34.77-11.3,3.69-6.42-.21-13.5-.25-13.57l-.09-.17-.03-.19-11.1-82.56,1.98-.27,11.08,82.38c.66,1.25,4.11,8.46.16,15.36-4.53,7.9-16.81,12.05-36.49,12.32-.43,0-.85,0-1.27,0Z"
              fill="#2f2e41"
            ></path>
            <path
              d="m421.1,165.55l25.67,136.68s-38.85,39.55,11.1,38.85c49.95-.69,35.38-26.36,35.38-26.36l-15.96-118.64"
              fill="#3f3d56"
            ></path>
            <path
              d="m456.61,342.09c-13.53,0-21.71-3.1-24.33-9.23-4.77-11.14,10.73-28.13,13.41-30.96l-10.31-55,1.97-.37,10.5,56.02-.37.37c-.18.18-17.94,18.45-13.36,29.15,2.35,5.5,10.33,8.2,23.74,8,18.66-.26,30.69-4.17,34.78-11.32,3.69-6.44-.22-13.48-.26-13.55l-.1-.17-15.98-118.83,1.98-.27,15.93,118.46c.66,1.25,4.11,8.46.16,15.36-4.53,7.9-16.81,12.05-36.49,12.32-.43,0-.85,0-1.27,0Z"
              fill="#2f2e41"
            ></path>
          </svg> */}
          <iframe
            src="https://embed.lottiefiles.com/animation/91743"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* phones  */}
      <form action="" className="   md:hidden flex flex-col ">
        <label htmlFor="">Your name</label>
        <input
          type="text"
          className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
        />
        <label htmlFor="">Email</label>

        <label htmlFor="">Message</label>

        <textarea className="border-none outline-none text-bgDark py-1 px-2 focus:border-none" />
        <input
          type="text"
          className="border-none outline-none text-bgDark py-1 px-2 focus:border-none"
        />

        <button type="submit">Submit</button>
      </form>

      <button
        onClick={toggleContact}
        className="absolute  w-8 h-8 flex justify-center items-center hover:rounded-full  text-gray-400 right-6 hover:bg-slate-300   top-6 cursor-pointer text-4xl"
      >
        x
      </button>
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
