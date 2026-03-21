"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const tabsName = [
    {
      id: 1,
      label: "History",
      content:
        "Our journey began in May 2025 with a simple dream — to make every home feel warm, functional, and beautifully designed. What started as a small step into the world of hardware and plywood quickly grew into a passion for crafting modular kitchens, wardrobes, and TV units that match modern lifestyles.",
      title2: "Milestones That Shaped Us",
      image: "/images/history.jpg",
      keyPoints: [
        "Started in May 2025 as a home-grown hardware & plywood business",
        "Introduced custom modular kitchens, wardrobes, and TV units",
        "Focused on strong materials, premium craftsmanship, and customer trust",
        "Proud to have transformed homes with designs that truly connect with families",
        "From day one, our goal has been to combine quality materials with beautiful designs — creating spaces that feel personal, organized, and built to last.",
      ],
      // progress: [
      //   {
      //     percentage: "80%",
      //     text: "Architecture",
      //   },
      //   {
      //     percentage: "70%",
      //     text: "Interior Design",
      //   },
      // ],
      content2:
        "At NK HOME AND DECOR, we believe every home tells a story. We are here to add style, comfort, and thoughtful functionality to yours.",
    },
    {
      id: 2,
      label: "Mission",
      content:
        "Our mission is to bring smart, durable, and stylish home solutions to every household. We aim to create furniture and interiors that don’t just look good, but also make everyday living easier. With quality plywood, premium hardware, and thoughtful craftsmanship, we turn empty spaces into functional, beautiful corners of your home.",
      title2: "",
      image: "/images/mission.jpg",
      keyPoints: "",
      content2:
        "We are committed to honesty, transparency, and delivering exactly what we promise — every single time.",
    },
    {
      id: 3,
      label: "Vision",
      content:
        "We envision NK HOME AND DECOR becoming a trusted name in home improvement, known for modern designs, reliable materials, and customer satisfaction. Our goal is to offer complete interior solutions that blend beauty, strength, and timelessness.",
      title2: "",
      image: "/images/vision.jpg",
      keyPoints: "",
      content2:
        "As we grow, we dream of helping more families create homes that feel warm, organized, and truly theirs.",
    },
  ];
  const [tabActive, setTabActive] = useState(tabsName[0].id);
  const sectionRef = useRef();
  const headingRef = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current, {
      x: 120,
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
  });

  return (
    <section
      className="relative z-[1] bg-[#161616] pt-[75px] lg:pt-[140px] pb-[75px] lg:pb-[137px] about-bg"
      ref={sectionRef}
    >
      <div className="container relative z-[10]">
        <div className="relative text-center mb-[16px] lg:mb-0">
          <div className="absolute top-[14%] left-[0%] z-[20] dance">
            <Image
              src="/images/border.png"
              width={125}
              height={125}
              alt="anim"
            />
          </div>
          <div className="absolute top-[15%] right-[0%] z-[20] float-bob2">
            <Image
              src="/images/counter-shape.png"
              width={76}
              height={63}
              alt="anim"
            />
          </div>
          <div ref={headingRef}>
            <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
              ABOUT US
            </h3>
            <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold title-bottom-line title-bottom-dot  title-bottom-line-anim">
              Discover NK's <span className="text-[#D7AB7C]"> Story</span>
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="relative p-5 group">
            <span className="block absolute top-0 left-[-3%] w-[103%] h-[1px] bg-[#D7AB7C]"></span>
            <span className="block absolute bottom-0 left-0 w-[103%] h-[1px] bg-[#D7AB7C]"></span>
            <span className="block absolute top-0 left-0 w-[1px] h-[103%] bg-[#D7AB7C]"></span>
            <span className="block absolute top-[-3%] right-0 w-[1px] h-[103%] bg-[#D7AB7C]"></span>
            <div className="relative h-full">
              <span className="block absolute top-0 left-0 w-full h-0 bg-[#d7ab7c] opacity-0 transition-all duration-500 group-hover:h-full group-hover:opacity-40"></span>
              <Image
                src="/images/about.jpg"
                width={1440}
                height={1920}
                alt="hello"
                className="w-full h-full"
              />
            </div>
            <div className="w-[211px] absolute bottom-[-28px] left-[50%] flex justify-center translate-x-[-50%] button-style">
              <Link
                href="/"
                className="relative z-[1] block text-[16px] leading-[32px] text-white font-medium text-center bg-[#161616] py-[15px] pr-[90px] pl-[45px] rounded-[30px] transition-all duration-500 group-hover:text-[#D7AB7C]"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <div className="tabs">
              <ul className="list-none flex items-center gap-10">
                {tabsName.map((item, index) => (
                  <li key={index} className="">
                    <button
                      type="button"
                      className={`uppercase inline-block outline-none py-[5px] rounded-[5px] text-[16px] leading-[30px] text-white font-normal transition duration-500 relative z-[1] cursor-pointer ${
                        tabActive === item.id ? "tab-active" : ""
                      }`}
                      onClick={() => setTabActive(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              {tabsName?.map((item, index) => (
                <div
                  key={index}
                  className={`hidden pt-[30px] ${
                    tabActive === item?.id ? "show-panel" : ""
                  }`}
                >
                  <p className="text-[14px] lg:text-[15px] leading-[28px] text-[#999999] font-normal mb-[33px]">
                    {item?.content}
                  </p>
                  {item?.title2 && (
                    <div className="flex gap-10 mb-[55px]">
                      {/* <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px] shrink-0">
                      <Image
                        src={item?.image}
                        width={640}
                        height={360}
                        className="w-full h-full"
                        alt="image"
                      />
                    </div> */}
                      <div className="grow">
                        {item?.title2 && (
                          <h4 className="text-[16px] lg:text-[20px] leading-[28px] text-white font-medium mb-[10px]">
                            {item?.title2}
                          </h4>
                        )}
                        {item?.keyPoints &&
                          item?.keyPoints?.map((item, index) => (
                            <p
                              key={index}
                              className="relative text-[15px] leading-[28px] text-[#999999] font-normal overflow-hidden mb-2 pl-5"
                            >
                              <span className="block absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-white"></span>
                              {item}
                            </p>
                          ))}
                      </div>
                    </div>
                  )}
                  {item?.progress?.map((item, index) => (
                    <div key={index} className="relative pb-[15px] mb-[34px]">
                      <p className="text-[15px] leading-[28px] text-white font-normal">
                        {item?.text}
                      </p>
                      <div className="absolute bottom-0 left-0 w-[100%] h-[3px] rounded-[5px] bg-[#2E2E2E]">
                        <div
                          className={`absolute top-0 left-0 flex justify-end h-[3px] bg-white`}
                          style={{ width: item?.percentage }}
                        >
                          <p className="text-white text-[16px] leading-[28px] font-normal mt-[-37px]">
                            {item?.percentage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <p className="text-[14px] lg:text-[15px] leading-[28px] text-[#999999] font-normal mb-0">
                    {item?.content2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
