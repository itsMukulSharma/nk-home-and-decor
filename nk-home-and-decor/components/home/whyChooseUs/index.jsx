"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const cardData = [
    {
      id: 0,
      title: "Modular Kitchen Solutions",
      text: "At NK HOME AND DECOR, we create modular kitchens that blend style, smart storage, and daily comfort. Every design is customized to your space using premium plywood and hardware. Our kitchens offer durability, smooth functionality, and modern aesthetics—making cooking easier and your home more beautiful.",
    },
    {
      id: 1,
      title: "Luxury Wardrobe Solutions",
      text: "Our wardrobes are designed to fit your lifestyle with intelligent storage, premium materials, and beautiful finishes. From sliding to hinged designs, each wardrobe is crafted for durability and smooth use. NK HOME AND DECOR ensures maximum space utilization while adding elegance and organization to your bedroom.",
    },
    {
      id: 2,
      title: "Modern TV Units",
      text: "NK HOME AND DECOR creates modern TV units that enhance your living room with style and functionality. Crafted with premium plywood and hardware, our units offer organized space for gadgets and décor. Choose from floating, classic, or custom designs that add elegance and perfectly complement your interiors.",
    },
  ];

  const marqueText = [
    { text: ". NK HOME AND DECOR ." },
    { text: ". Quality You Can Trust ." },
    { text: ". Crafted for Modern Homes ." },
    { text: ". Smart Designs ." },
    { text: ". Premium Materials ." },
    { text: ". Perfect Finish ." },
    { text: ". Modular Kitchens ." },
    { text: ". Designer Wardrobes ." },
    { text: ". Modern TV Units ." },
  ];

  const headingRef = useRef();
  const sectionRef = useRef();
  const cardRefs = useRef([]);

  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      x: -120,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "top 40%",
        scrub: 3,
      },
    });

    // Cards animation (with delay + fade + stagger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRefs.current,
        start: "top 75%",
        end: "top 30%",
        scrub: 3,
        // markers: true,
      },
    });

    tl.from(cardRefs.current, {
      opacity: 0,
      duration: 5,
      stagger: 1,
      x: (i) => (i === 0 ? -250 : i === 2 ? 250 : 0),
      y: (i) => (i === 1 ? 250 : 0),
    });
  }, []);

  return (
    <section
      className="relative w-full pt-[75px] lg:pt-[140px] bg-[url('/images/Banner_2.jpg')] bg-center bg-cover"
      ref={sectionRef}
    >
      <div className="top-shadow"></div>
      <div className="absolute top-0 left-0 w-full h-full z-[20] bg-black/90"></div>
      <div className="container relative z-[40] pb-[75]">
        <div
          className="relative text-center mb-[16px] lg:mb-0"
          ref={headingRef}
        >
          <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
            Our Expertise
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold uppercase">
            Designs That Inspire <span className="text-[#D7AB7C]"> Living</span>
          </h4>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {cardData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative overflow-hidden group"
            >
              <h4 className="text-[18px] leading-[30px] text-[#d8ab7a] font-medium m-0 bg-[#212121] inline-block h-[45px] w-[90px] text-right pr-[15px] pt-[8px] relative z-[1] transition-all duration-500 group-hover:text-white number-before number-after">
                0{item.id + 1}
              </h4>
              <h5 className="text-[20px] lg:text-[24px] leading-[40px] text-white font-medium mt-[37px] mb-[11px] transition duration-500 hover:text-[#d8ab7a]">
                {item.title}
              </h5>
              <p className="text-[14px] lg:text-[15px] leading-[28px] text-[#999999] font-normal mb-[16px]">
                {item.text}
              </p>
              <div className="relative z-[1] transition-all duration-500 overflow-hidden view-btn-circle">
                <button
                  type="button"
                  className="inline-block relative z-[1] text-[15px] leading-[32px] text-white font-normal transition-all duration-500 ml-[-103px] group-hover:text-[#D9AA7C] group-hover:ml-0 hover:cursor-pointer view-btn-line view-btn-dot"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-[40] py-[100px] bg-[url('/images/tag-bg.jpg')] bg-center bg-cover">
        <div className="relative flex overflow-hidden">
          <div className="flex items-center justify-around shrink-[0] min-w-[87%] marque-animation">
            {marqueText.map((item, index) => (
              <div key={index} className="relative">
                <h4 className="inline-block text-[42px] text-white font-semibold px-12 transition duration-500 hover:text-[#D8AB7A] uppercase">
                  <span>{item.text}</span>
                </h4>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-around shrink-[0] min-w-[87%] marque-animation">
            {marqueText.map((item, index) => (
              <div key={index} className="relative">
                <h4 className="inline-block text-[42px] text-white font-semibold px-12 transition duration-500 hover:text-[#D8AB7A] uppercase">
                  <span>{item.text}</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
