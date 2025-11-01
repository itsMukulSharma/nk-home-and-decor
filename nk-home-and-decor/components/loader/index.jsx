"use client";
import React from "react";

const PageLoader = ({loaded}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[9999] overflow-hidden loader-wrapper ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="relative top-[50%] left-[50%] z-[20] w-[100px] h-[100px] border-3 border-t-[#d8ab7a] border-r-white border-b-white border-l-[#d8ab7a] rounded-full transition-all duration-1000 delay-1000 translate-[50%,50%] loader"></div>

      <div className="absolute top-0 left-0 w-[50%] h-[100%] z-2 bg-[#111] transition-all duration-1000 delay-[1400ms] ease-in-out left-section"></div>

      <div className="absolute top-0 right-0 w-[50%] h-[100%] z-2 bg-[#111] transition-all duration-1000 delay-[1400ms] ease-in-out right-section"></div>
    </div>
  );
};

export default PageLoader;
