import Image from "next/image";
import React from "react";

const LatestWork = () => {
  const workData = [
    {
      id: 0,
      gallery: 1,
      largeImage: [
        {
          id: 0,
          img: "/images/tvUnit.jpg",
          count: 1,
          title: "Modern TV Units",
        },
      ],
      smallImage: [
        { id: 0, img: "/images/modernKitchen.jpg", title: "Modular Kitchen" },
        { id: 1, img: "/images/livingRoom.jpg", title: "Luxury living room" },
      ],
    },
    {
      id: 0,
      gallery: 2,
      largeImage: [
        {
          id: 0,
          img: "/images/woodBoxes.jpg",
          count: 2,
          title: "Wooden packaging boxes",
        },
        {
          id: 1,
          img: "/images/LuxuryWardrobe.webp",
          count: 2.1,
          title: "Luxury Wardrobe Solutions",
        },
      ],
    },
    // {
    //   id: 0,
    //   gallery: 3,
    //   largeImage: [
    //     { id: 0, img: "/images/apartment.jpg", count: 3 },
    //     { id: 1, img: "/images/apartment.jpg", count: 3 },
    //     { id: 3, img: "/images/apartment.jpg", count: 3 },
    //   ],
    // },
  ];
  return (
    <section className="relative z-[1] bg-[#161616] py-[75px] lg:pt-[90px] lg:pb-[90px]">
      <div className='container relative z-[10]">'>
        <div className="relative text-center mb-[16px] lg:mb-0">
          <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
            WORKS
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold title-bottom-line title-bottom-dot  title-bottom-line-anim">
            Latest <span className="text-[#D7AB7C]"> Works</span>
          </h4>
        </div>
        {workData?.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 gap-[24px] mb-[24px] ${
              item?.gallery === 1
                ? "lg:grid-cols-9"
                : item?.gallery === 2
                ? "lg:grid-cols-9"
                : "lg:grid-cols-3"
            }`}
          >
            {item?.largeImage?.map((item, index) => (
              <div
                key={index}
                className={`relative col-span-6 overflow-hidden image-grad group ${
                  item?.count === 1
                    ? "lg:col-span-6"
                    : item?.count === 2
                    ? "lg:col-span-3"
                    : ""
                } ${item?.count === 2.1 && "lg:col-span-6"}`}
              >
                <div className="w-full h-full">
                  <Image
                    src={item?.img}
                    width={640}
                    height={425}
                    className="w-full h-full"
                    alt="image"
                  />
                </div>
                <div className="absolute bottom-0 bg-[#161616] px-[25px] py-[20px] transition-all duration-500 left-[-30%] opacity-0 z-[22] group-hover:left-0 group-hover:opacity-100">
                  <h3 className="text-[18px] leading-[29px] lg:text-[22px] lg:leading-[32px] text-[#d8ab7a] font-medium m-0">
                    {item?.title}
                  </h3>
                </div>
              </div>
            ))}

            {item?.gallery === 1 && (
              <div className="col-span-6 lg:col-span-3 flex flex-col gap-[24px]">
                {item?.smallImage?.map((item, index) => (
                  <div
                    key={index}
                    className="relative h-full overflow-hidden image-grad group"
                  >
                    <Image
                      src={item?.img}
                      width={640}
                      height={425}
                      className="w-full h-full"
                      alt="image"
                    />
                    <div className="absolute bottom-0 bg-[#161616] px-[25px] py-[20px] transition-all duration-500 left-[-30%] opacity-0 z-[22] group-hover:left-0 group-hover:opacity-100">
                      <h3 className="text-[22px] leading-[32px] text-[#d8ab7a] font-medium m-0">
                        {item?.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
