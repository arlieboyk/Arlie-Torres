import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function SocialSideBar() {
  return (
    <div className="px-4 py-2 hidden  md:flex backdrop-filter backdrop-blur-lg  rounded-md   relative inset-0 m-auto  flex-col space-y-4">
      <a href="https://www.facebook.com/liboy12/" target="_blank">
        <FaFacebook className="md:w-8 md:h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
      </a>
      <a
        href="https://www.linkedin.com/in/arlie-torres-18946a258/"
        target="_blank"
      >
        <FaLinkedin className="md:w-8 md:h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
      </a>

      <a href="https://github.com/arlieboyk" target="_blank">
        <FaGithub className="md:w-8 md:h-8 lg:w-12 lg:h-12 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
      </a>
    </div>
  );
}
