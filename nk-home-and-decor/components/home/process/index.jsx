import { Icons } from "@/components/icons";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Process = ({ data }) => {
  const processSteps = data?.steps?.length > 0 ? data.steps.map((s, i) => ({
    id: i,
    title: s.title,
    text: s.description,
    img: s.image || null,
    features: s.features || []
  })) : [
    {
      id: 0,
      title: "Concept Lookbooks & 2D Space Planning",
      text: "We fuse your favorite Pinterest and Google design inspirations with practical engineering. Our team drafts custom, highly detailed 2D layouts and floor plans to optimize cabinet clearances, sizing, and structural parameters before layout approval.",
      img: "/images/architecture.jpg",
      features: []
    },
    {
      id: 1,
      title: "Luxury Material Curation",
      text: "We guide you through hand-picking high-end custom laminates, anti-scratch acrylic finishes, and soft-close mechanisms right from our warehouse ecosystem.",
      img: "/images/woodBox.jpg",
      features: []
    },
    {
      id: 2,
      title: "On-Site Master Craftsmanship",
      text: "We deploy our trusted network of artisan carpenters straight to your site, executing millwork with precision and industrial integrity.",
      img: "/images/livingRoom.jpg",
      features: []
    },
    {
      id: 3,
      title: "Flawless Delivery Handover",
      text: "Comprehensive checks on soft-close systems, integrated profile accent lights, and seal integrity ensure your dream space is perfectly handed over.",
      img: "/images/modern_kitchen.jpg",
      features: []
    },
  ];

  const title = data?.title || <>Pinterest-to-Reality <span className="text-[#D7AB7C]"> + 2D Design</span></>;

  const sectionRef = useRef();
  const headingRef = useRef();
  const stepRefs = useRef([]);

  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      },
    });

    // Steps animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(stepRefs.current, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section
      id="process"
      className="relative z-[1] bg-[#101010] py-[75px] lg:py-[110px] overflow-hidden"
      ref={sectionRef}
    >
      <div className="container relative z-[10]">
        <div className="relative text-center mb-[30px] lg:mb-[60px]" ref={headingRef}>
          <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
            Our Process
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold title-bottom-line title-bottom-dot title-bottom-line-anim">
            {title}
          </h4>
        </div>

        <div className="mt-[20px] lg:mt-[50px]">
          {processSteps.map((item, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="grid grid-cols-1 lg:grid-cols-[40%_50%_10%] gap-[16px] lg:gap-0 py-[40px] border-b border-b-[#212121] first:border-t first:border-t-[#212121] group"
            >
              <div className="relative">
                <h4 className="relative z-[10] text-white text-[22px] lg:text-[26px] leading-[32px] font-medium">
                  <span className="text-[#D7AB78]">Process 0{item.id + 1}. </span>
                  {item.title}
                </h4>
                {item.features?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.features.map((feature, fIdx) => {
                      const IconComponent = Icons[feature.icon] || Icons.Check;
                      return (
                        <div key={fIdx} className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5 rounded-full border border-[#282828]">
                          <IconComponent className="text-[#D7AB78] w-4 h-4" />
                          <span className="text-[12px] text-[#999999]">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="relative z-[10]">
                <p className="text-[#999999] text-[15px] lg:text-[16px] leading-[28px] font-normal">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center justify-end">
                <div className="w-[60px] h-[60px] rounded-full border border-[#282828] flex items-center justify-center transition-all duration-500 group-hover:border-[#D7AB7C] overflow-hidden relative">
                   {item.img && <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
