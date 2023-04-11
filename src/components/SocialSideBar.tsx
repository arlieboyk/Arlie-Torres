import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function SocialSideBar() {
  return (
    <div className="stickySidebar ">
      <div className="px-4 py-2  hidden md:flex  w-auto  backdrop-filter backdrop-blur-lg  rounded-lg  m-auto  flex-col space-y-4">
        <SideBarIcon
          social="Github"
          icon={<FaGithub size={24} />}
          link="https://github.com/arlieboyk"
        />

        <SideBarIcon
          social="Facebook"
          icon={<FaFacebook size={24} />}
          link="https://www.facebook.com/liboy12/"
        />

        <SideBarIcon
          social="Linkedin"
          icon={<FaLinkedin size={24} />}
          link="https://www.linkedin.com/in/arlie-torres-18946a258/"
        />
      </div>
    </div>
  );
}

interface Icon {
  icon: any;
  link: string;
  social: string;
}
const SideBarIcon = ({ icon, link, social }: Icon) => (
  <div className="group relative">
    <a href={link} target="_blank" className="sideBar-icon   ">
      {icon}
    </a>
    <span className="sidebar-tooltip  group-hover:scale-100 ">{social}</span>
  </div>
);
