"use client";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LandingBanner = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  return (
    <section
      className="relative flex h-screen pt-[70px] bottom-shadow"
      ref={containerRef}
    >
      <div className="absolute top-0 left-0 w-full h-full z-[10]">
        <video
          className="w-full h-full object-cover"
          id="my-video"
          muted
          loop
          autoPlay
          playsInline
        >
          <source src="/images/banner_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[20] bg-black/60"></div>
      <div
        className="hidden lg:block absolute top-0 left-0 w-[60%] h-full bg-[#101010]/90 z-[20] after:content-[''] after:absolute after:top-[55%] after:right-[-60px] after:w-[60px] after:h-[75%] after:rounded-tr-[20px] after:rounded-br-[20px] after:bg-[#101010]/90 after:translate-y-[-50%]"
        ref={wrapperRef}
      ></div>
      <div className="container relative z-[999] lg:h-[75%]">
        <div className="relative lg:w-[40%] h-full lg:ml-20 pt-[50px] pl-[50px] pb-[50px] bg-[#1E1E1E]">
          <span className="absolute block top-[-10px] left-[-25px] w-[110%] h-[1px] bg-white/50"></span>
          <span className="absolute block bottom-[-10px] left-[-10px] w-[107%] h-[1px] bg-white/50"></span>
          <span className="absolute block top-[-10px] left-[-10px] w-[1px] h-[108%] bg-white/50"></span>
          <span className="absolute block top-[-25px] right-[-10px] w-[1px] h-[107%] bg-white/50"></span>
          <div>
            <h2 className="text-[#d8ab7a] text-[12px] lg:text-[16px] leading-[24px] font-normal mb-[16px] lg:mb-[24px] uppercase">
              Building in Haryana, India
            </h2>
            <p className="w-[1px] h-[80px] bg-white/50 mb-[8px] lg:mb-0"></p>
            <p className="text-[#ffffff] text-[22px] leading-[35px] lg:text-[35px] lg:leading-[50px] font-semibold mb-[24px] capitalize mb-[15px] lg:mb-[40px]">
              Build your <span className="text-[#d8ab7a]"> vision </span>
              creating reality new design
            </p>
            <div className="relative after:content-[''] after:absolute after:top-[50%] after:left-[200px] after:w-[30px] after:h-[30px] after:border after:border-white after:rounded-full after:translate-y-[-50%]">
              <button
                type="button"
                className="relative inline-block text-[#ffffff] text-[16px] leading-[32px] font-medium bg-none border-0 cursor-pointer banner-detail-btn-after banner-detail-btn-before transition-[0.5s] hover:text-[#D7AB79]"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
