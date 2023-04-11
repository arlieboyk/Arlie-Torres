"use client";
import { useState } from "react";
import React from "react";
import SideBar from "./SideBar";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
import Contact from "./Contact";

export default function Navbar() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isContactVisible, setisContactVisible] = useState(false);

  const handleContact = () => {
    console.log(`contact ${isContactVisible}`);
    setisContactVisible(!isContactVisible);
  };

  const handleSideBar = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {!isVisible && (
        <header
          className={`nav-bar px-6 py-4 z-[99] w-full absolute top-0 backdrop-filter backdrop-lg ${
            darkToggle && "dark"
          }`}
        >
          <nav className="flex justify-between items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 94 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-105 fill-white "
            >
              <path
                d="M17 47V87C17 87.5523 17.4477 88 18 88H30C30.5523 88 31 87.5523 31 87V47C31 46.4477 30.5523 46 30 46H24H18C17.4477 46 17 46.4477 17 47Z"
                fill="white"
              />
              <path
                d="M1.36421 41.2253L4.79278 29.2253C4.91544 28.796 5.30782 28.5 5.7543 28.5H17V2.00851C17 1.45291 17.4529 1.00384 18.0085 1.00855L75.0267 1.49175C75.5684 1.49634 76.008 1.93152 76.018 2.4732L76.4818 27.5185C76.4919 28.0635 76.9366 28.5 77.4817 28.5H86.5H92.2192C92.8698 28.5 93.3472 29.1114 93.1894 29.7425L90.1894 41.7425C90.0781 42.1877 89.6781 42.5 89.2192 42.5H83H77.011C76.4545 42.5 76.005 42.9544 76.0111 43.511L76.4889 86.989C76.495 87.5456 76.0455 88 75.489 88H63.5134C62.9559 88 62.5061 87.5441 62.5135 86.9867L63.4865 14.0133C63.4939 13.4559 63.0441 13 62.4866 13H32C31.4477 13 31 13.4477 31 14V28.5H58.5C59.0523 28.5 59.5 28.9477 59.5 29.5V41.5C59.5 42.0523 59.0523 42.5 58.5 42.5H54V104C54 104.552 53.5523 105 53 105H41C40.4477 105 40 104.552 40 104V42.5H2.32573C1.66135 42.5 1.18169 41.8641 1.36421 41.2253Z"
                fill="white"
              />
              <path
                d="M17 28.5H5.7543C5.30782 28.5 4.91544 28.796 4.79278 29.2253L1.36421 41.2253C1.18169 41.8641 1.66135 42.5 2.32573 42.5H40M17 28.5V2.00851C17 1.45291 17.4529 1.00384 18.0085 1.00855L75.0267 1.49175C75.5684 1.49634 76.008 1.93152 76.018 2.4732L76.4818 27.5185C76.4919 28.0635 76.9366 28.5 77.4817 28.5H86.5H92.2192C92.8698 28.5 93.3472 29.1114 93.1894 29.7425L90.1894 41.7425C90.0781 42.1877 89.6781 42.5 89.2192 42.5H83H77.011C76.4545 42.5 76.005 42.9544 76.0111 43.511L76.4889 86.989C76.495 87.5456 76.0455 88 75.489 88H63.5134C62.9559 88 62.5061 87.5441 62.5135 86.9867L63.4865 14.0133C63.4939 13.4559 63.0441 13 62.4866 13H32C31.4477 13 31 13.4477 31 14V28.5M17 28.5H31M31 28.5H58.5C59.0523 28.5 59.5 28.9477 59.5 29.5V41.5C59.5 42.0523 59.0523 42.5 58.5 42.5H54M40 42.5V104C40 104.552 40.4477 105 41 105H53C53.5523 105 54 104.552 54 104V42.5M40 42.5H54M24 46H18C17.4477 46 17 46.4477 17 47V87C17 87.5523 17.4477 88 18 88H30C30.5523 88 31 87.5523 31 87V47C31 46.4477 30.5523 46 30 46H24Z"
                stroke="white"
              />
            </svg>

            {/* hamburger */}
            <div className="hamburger w-12 h-12 " onClick={handleSideBar}>
              <p className="top "></p>
              <p className="center"></p>
              <p className="bottom"></p>
            </div>

            <div className="hidden items-center justify-center md:flex space-x-3 ">
              <div>
                <span className="hover:text-secondary mx-2">//</span>
                <Link
                  href="/"
                  className=" hover:text-bgBlue text-lg  cursor-pointer text-secondary"
                >
                  Home
                </Link>
              </div>
              <div>
                <span className="hover:text-secondary cursor-pointer mx-2">
                  //
                </span>
                <a
                  href="#work"
                  className=" hover:text-bgBlue text-lg cursor-pointer  text-secondary"
                >
                  Work
                </a>
              </div>
              <div>
                <span className="hover:text-secondary cursor-pointer mx-2">
                  //
                </span>
                <button
                  onClick={handleContact}
                  className=" hover:text-bgBlue text-lg cursor-pointer  text-secondary"
                >
                  Contact
                </button>
              </div>
              {darkToggle ? (
                <BsFillSunFill
                  onClick={() => setDarkToggle(!darkToggle)}
                  className="h-7 w-7 hover:bg-[#294d87] p-1 rounded-full cursor-pointer"
                />
              ) : (
                <MdDarkMode
                  onClick={() => setDarkToggle(!darkToggle)}
                  className="h-7 w-7 hover:bg-[#294d87] duration-150 delay-100 p-1 rounded-full cursor-pointer"
                />
              )}
            </div>
          </nav>
        </header>
      )}
      <Contact isVisible={isContactVisible} toggleContact={handleContact} />
      {/* sidebar */}
      <SideBar
        isVisible={isVisible}
        toggleSIdeBar={handleSideBar}
        isContactVisible={isContactVisible}
        toggleContact={handleContact}
      />
    </>
  );
}
