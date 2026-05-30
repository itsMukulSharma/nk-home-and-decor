import Image from "next/image";
import React from "react";

const LatestWork = ({ data }) => {
  // If no data from Sanity, use empty array or handle gracefully
  const projects = data?.projects || [];
  const sectionTitle = data?.title || "Works";

  return (
    <section className="relative z-[1] bg-[#161616] py-[75px] lg:pt-[90px] lg:pb-[90px]">
      <div className="container xl-container relative z-[10]">
        <div className="relative text-center mb-[16px] lg:mb-0">
          <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
            {sectionTitle}
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold title-bottom-line title-bottom-dot  title-bottom-line-anim">
            Latest <span className="text-[#D7AB7C]"> Works</span>
          </h4>
        </div>

        {projects.map((project, index) => {
          const { layoutType, items } = project;

          return (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-9 gap-[24px] mb-[24px]"
            >
              {layoutType === 1 ? (
                <>
                  {/* Layout Type 1: Large Item (6 cols) + 2 Small Items (3 cols) */}
                  <div className="col-span-1 lg:col-span-6 relative overflow-hidden image-grad group">
                    <div className="w-full h-full">
                      {items[0]?.img && (
                        <Image
                          src={items[0].img}
                          width={1280}
                          height={850}
                          className="w-full h-full object-cover"
                          alt={items[0]?.title || "work"}
                        />
                      )}
                    </div>
                    <div className="absolute bottom-0 bg-[#161616] px-[25px] py-[20px] transition-all duration-500 left-[-30%] opacity-0 z-[22] group-hover:left-0 group-hover:opacity-100">
                      <h3 className="text-[18px] leading-[29px] lg:text-[22px] lg:leading-[32px] text-[#d8ab7a] font-medium m-0">
                        {items[0]?.title}
                      </h3>
                    </div>
                  </div>

                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-[24px]">
                    {items.slice(1, 3).map((smallItem, idx) => (
                      <div
                        key={idx}
                        className="relative h-full overflow-hidden image-grad group"
                      >
                        {smallItem?.img && (
                          <Image
                            src={smallItem.img}
                            width={640}
                            height={425}
                            className="w-full h-full object-cover"
                            alt={smallItem?.title || "work"}
                          />
                        )}
                        <div className="absolute bottom-0 bg-[#161616] px-[25px] py-[20px] transition-all duration-500 left-[-30%] opacity-0 z-[22] group-hover:left-0 group-hover:opacity-100">
                          <h3 className="text-[18px] lg:text-[22px] leading-[32px] text-[#d8ab7a] font-medium m-0">
                            {smallItem?.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Layout Type 2: Small Item (3 cols) + Large Item (6 cols) */}
                  <div className="col-span-1 lg:col-span-3 relative overflow-hidden image-grad group order-2 lg:order-1">
                     {items[1]?.img && (
                      <Image
                        src={items[1].img}
                        width={640}
                        height={425}
                        className="w-full h-full object-cover"
                        alt={items[1]?.title || "work"}
                      />
                    )}
                    <div className="absolute bottom-0 bg-[#161616] px-[25px] py-[20px] transition-all duration-500 left-[-30%] opacity-0 z-[22] group-hover:left-0 group-hover:opacity-100">
                      <h3 className="text-[18px] lg:text-[22px] leading-[32px] text-[#d8ab7a] font-medium m-0">
                        {items[1]?.title}
                      </h3>
                    </div>
                  </div>

                  <div className="col-span-1 lg:col-span-6 relative overflow-hidden image-grad group order-1 lg:order-2">
                    <div className="w-full h-full">
                      {items[0]?.img && (
                        <Image
                          src={items[0].img}
                          width={1280}
                          height={850}
                          className="w-full h-full object-cover"
                          alt={items[0]?.title || "work"}
                        />
                      )}
                    </div>
                    <div className="absolute bottom-0 bg-[#161616] px-[25px] py-[20px] transition-all duration-500 left-[-30%] opacity-0 z-[22] group-hover:left-0 group-hover:opacity-100">
                      <h3 className="text-[18px] leading-[29px] lg:text-[22px] lg:leading-[32px] text-[#d8ab7a] font-medium m-0">
                        {items[0]?.title}
                      </h3>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LatestWork;
