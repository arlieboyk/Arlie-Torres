import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
interface SideBarProps {
  isVisible: boolean;
  toggleSIdeBar: () => void;
  isContactVisible: boolean;

  toggleContact: () => void;
}
export default function SideBar({
  isVisible,
  toggleSIdeBar,
  toggleContact,
  isContactVisible,
}: SideBarProps) {
  return (
    <div
      className={`absolute h-full md:hidden top-0   ${
        isVisible ? " translate-x-0" : "delay-300 -translate-x-full"
      } z-[99] h-screen w-full  bg-blue-400 transition-transform`}
    >
      <div
        className={` bg-bgDark z-10 relative h-screen w-full flex flex-col justify-center items-center   transition-all  top-0  ${
          isVisible
            ? " translate-x-0  delay-300"
            : "duration-100 -translate-x-full "
        } `}
      >
        {/* close button */}
        <GrFormClose
          color="#ffffff"
          className="w-10 h-10 bg-slightDark hover:scale-105  cursor-pointer rounded-full hover:text-white hover:bg-slightDark  p-2 absolute top-3 right-2"
          onClick={toggleSIdeBar}
        />

        {/* links */}
        <div className="flex flex-col m-auto relative w-auto h-auto bottom-20 md:inset-0 text-center  space-y-8">
          <a
            onClick={toggleSIdeBar}
            href="/"
            className="text-3xl text-textColor font-semibold hover:text-bgBlue transition-all duration-300"
          >
            Home
          </a>
          <a
            onClick={toggleSIdeBar}
            href="#work"
            className="text-3xl text-textColor font-semibold hover:text-bgBlue transition-all duration-300"
          >
            Work
          </a>
          <a
            onClick={() => {
              toggleSIdeBar();
              toggleContact();
            }}
            // href="#hero"
            className="text-3xl cursor-pointer text-textColor font-semibold hover:text-bgBlue transition-all duration-300"
          >
            Contact
          </a>
          <a
            onClick={toggleSIdeBar}
            href="#about-me"
            className="text-3xl text-textColor font-semibold hover:text-bgBlue transition-all duration-300"
          >
            About me
          </a>
        </div>

        {/* sociales */}
        <div className="flex absolute left-0 right-0 mx-auto bottom-[5rem] justify-center items-center space-x-6">
          <a href="https://www.facebook.com/liboy12/" target="_blank">
            <FaFacebook className="w-8 h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
          </a>
          <a
            href="https://www.linkedin.com/in/arlie-torres-18946a258/"
            target="_blank"
          >
            <FaLinkedin className="w-8 h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
          </a>
          <a href="https://github.com/arlieboyk" target="_blank">
            <FaGithub className="w-8 h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
          </a>
        </div>
      </div>
    </div>
  );
}
