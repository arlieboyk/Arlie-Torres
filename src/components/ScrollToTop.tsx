"use client";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";

function ScrollTop() {
  return (
    <ScrollToTop duration={250} topPosition={200} showUnder={20}>
      <span>
        <FaChevronUp className="h-12 w-12 rounded-full bg-bgBlue bg-opacity-50 p-3 text-gray-200 hover:bg-[#0088cc] hover:bg-opacity-100 hover:text-white" />
      </span>
    </ScrollToTop>
  );
}

export default ScrollTop;
