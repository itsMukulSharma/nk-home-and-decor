import { Icons } from "@/components/icons";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/libs/sanity";

const BestServices = ({ data }) => {
  const serviceData = data?.length > 0 ? data : [
    {
      id: 0,
      title: "Architecture Design",
      img: "/images/architecture.jpg",
      description:
        "Our Architecture Design collection focuses on blending timeless aesthetics with structural elegance. Each piece is thoughtfully created to complement architectural details, making your home not just a living space but a design statement.",
      keyPoints: [
        "Designs inspired by classic and modern architectural elements.",
        "Décor that enhances the flow and proportion of interiors.",
        "Use of quality woods, stones, and metals for durability and elegance.",
      ],
    },
    {
      id: 1,
      title: "Urban Design",
    img: "/images/urban.jpg",
      description:
        "Bring the essence of city life into your home with our Urban Design collection. Blending sleek functionality with modern aesthetics, we create décor that reflects today’s fast-paced yet stylish lifestyle.",
      keyPoints: [
        "Use of industrial textures, matte tones, and metallic hints for a cosmopolitan vibe.",
        "Smart designs tailored for modern apartments and urban homes.",
        "Clean lines and striking accents for a chic, contemporary look.",
      ],
    },
    {
      id: 2,
      title: "Sustainable Packaging",
      img: "/images/woodBox.jpg",
      description:
        "Our handcrafted wooden boxes are more than just packaging — they are a statement of elegance and care. Designed with precision and sustainability in mind, these boxes protect your products while adding a touch of sophistication.",
      keyPoints: [
        "Each box is carefully handcrafted for durability and beauty.",
        "Made from responsibly sourced wood.",
        "Tailored sizes, finishes, and engravings to match your brand or personal touch.",
      ],
    },
  ];
  return (
    <section className="relative z-[1] bg-[#161616] py-[75] lg:pt-[90px] lg:pb-[90px]">
      <div className='container relative z-[10]">'>
        <div className="relative text-center mb-[16px] lg:mb-0">
          <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
            SERVICES
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold title-bottom-line title-bottom-dot  title-bottom-line-anim">
            See Our Best <span className="text-[#D7AB7C]"> Services</span>
          </h4>
        </div>
        {serviceData?.map((item, index) => {
          const imgUrl = item.icon ? urlFor(item.icon).url() : item.img;
          return (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[40%_40%_20%] gap-[16px] lg:gap-0 pt-[40px] pb-[30] border-y border-y-[#212121] group"
            >
              <div className="relative">
                <h4 className="relative z-[10] text-white text-[23px] lg:text-[28px] leading-[32px] font-medium">
                  <span className="text-[#D7AB78]">0{index + 1}. </span>
                  {item?.title}
                </h4>
                {imgUrl && (
                  <div className="absolute w-[264px] h-[320px] top-[40px] right-0 lg:right-[10%] z-[1] transition-all duration-500 opacity-0 group-hover:top-[-30px] group-hover:opacity-100">
                    <div className="lg:hidden absolute w-full h-full bg-black/70"></div>
                    <Image
                      src={imgUrl}
                      width={852}
                      height={1395}
                      className="w-full h-full"
                      alt="image"
                    />
                  </div>
                )}
              </div>
              <div className="relative z-[10]">
                <p className="text-[#999999] text-[16px] leading-[28px] font-normal mb-[16px]">
                  {item?.description}
                </p>
                <ul className="list-none">
                  {item?.keyPoints?.map((kp, idx) => (
                    <li key={idx}>
                      <p className="flex gap-2 items-start text-white text-[16px] leading-[28px] font-normal mb-[8px]">
                        <Icons.Check
                          size={20}
                          fill="#D7AB79"
                          className="mt-[5px]"
                        />
                        {kp}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="inline-block text-[16px] leading-[30px] text-white font-medium border-0 bg-transparent transition duration-500 cursor-pointer hover:text-[#D7AB79]"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestServices;
