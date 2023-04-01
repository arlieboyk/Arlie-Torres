import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function SocialSideBar() {
  return (
    <div className="px-4 py-2  backdrop-filter backdrop-blur-lg  rounded-md  md:flex  relative inset-0 m-auto  flex-col space-y-4">
      <FaTwitter className="w-6 h-6 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
      <FaFacebook className="w-6 h-6 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
      <FaLinkedin className="w-6 h-6 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
      <FaGithub className="w-6 h-6 text-slate-400 opacity-70 hover:opacity-100 hover:scale-105" />
    </div>
  );
}
