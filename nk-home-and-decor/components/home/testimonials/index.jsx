import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Icons } from "@/components/icons";
import { urlFor } from "@/libs/sanity";

const Testimonials = ({ data }) => {
  const customerReviews = data?.length > 0 ? data : [
    {
      id: 0,
      review:
        "I purchased modular kitchen materials from here, and the quality was top-notch. Everything was delivered on time, and the finish gave my kitchen a premium look. Highly recommended!",
      name: "Anita Sharma",
      rating: 5,
    },
    {
      id: 1,
      review:
        "Their wooden packaging boxes are sturdy and beautifully crafted. I use them for gifting and storage, and they never fail to impress. Great craftsmanship!",
      name: "Rahul Mehta",
      rating: 4,
    },
    {
      id: 2,
      review:
        "I was looking for modern interior design materials, and this place had exactly what I needed. The designs are elegant, durable, and made my living space look stunning.",
      name: "Sneha Kapoor",
      rating: 5,
    },
    {
      id: 3,
      review:
        "From building materials to décor essentials, they have everything under one roof. The team is supportive and guided me in choosing the right products for my project.",
      name: "Vikram Singh",
      rating: 4,
    },
    {
      id: 4,
      review:
        "Excellent service and premium quality! I sourced both kitchen fittings and décor items, and everything blended perfectly with my modern interiors. Will definitely shop again.",
      name: "Priya Nair",
      rating: 5,
    },
  ];

  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      // Custom click handling
      const bullets = document.querySelectorAll(".custom-bullet");
      bullets.forEach((bullet, index) => {
        bullet.classList.toggle("bg-[#D7AB79]", index === 0);
        bullet.addEventListener("click", () => {
          swiperInstance.slideTo(index);
        });
      });
    }
  }, [customerReviews]);
  return (
    <section className="relative bg-[#0F0F0F]">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">
        <div className="hidden lg:block relative w-full h-[400px] lg:h-full">
          <Image
            src="/images/customer_review.webp"
            width={640}
            height={425}
            className="w-full h-full"
            alt="image"
          />
        </div>
        <div className="lg:max-w-[82%] py-[75px] px-[1rem] lg:py-[50px] lg:pl-[100px]">
          <div className="relative text-center mb-[16px] lg:mb-0">
            <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
              REVIEWS
            </h3>
            <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold title-bottom-line title-bottom-dot  title-bottom-line-anim">
              Customer’s <span className="text-[#D7AB7C]"> Feedback</span>
            </h4>
          </div>
          <div className="p-[10px] relative z-[1] border border-[#1D1D1D] transition-all duration-500">
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              slidesPerView={1}
              className="mySwiper"
              onSlideChange={(swiper) => {
                // Update active class manually
                document
                  .querySelectorAll(".custom-bullet")
                  .forEach((el, i) =>
                    el.classList.toggle(
                      "bg-[#D7AB79]",
                      i === swiper.activeIndex
                    )
                  );
              }}
            >
              {customerReviews?.map((item, index) => {
                const photoUrl = item.photo ? urlFor(item.photo).url() : "/images/apartment.jpg";
                return (
                  <SwiperSlide
                    key={index}
                    className="bg-[#1E1E1E] pt-[30px] pr-[40px] pb-[50px] pl-[40px]"
                  >
                    <h4 className="text-[12px] leading-[25px] lg:text-[16px] lg:leading-[30px] text-[#999999] font-normal italic mb-[16px]">
                      “{item?.review}”
                    </h4>
                    <span className="inline-block w-[1px] h-[70px] bg-[#D7AB79] mb-[16px]"></span>
                    <div className="relative flex items-center gap-[16px]">
                      <div className="w-[65px] h-[65px] shrink-0 rounded-full overflow-hidden">
                        <Image
                          src={photoUrl}
                          width={640}
                          height={425}
                          className="w-full h-full object-cover"
                          alt="image"
                        />
                      </div>
                      <div>
                        <h5 className="text-[18px] leading-[26px] text-white font-medium mb-[4px]">
                          {item?.customerName || item?.name}
                        </h5>
                        <div className="flex text-[13px] leading-[26px] text-[#d8ab7a] font-normal gap-1">
                          {Array.from({ length: 5 }, (_, i) => {
                            const starValue = i + 1;
                            const rating = item.rating || 5;
                            
                            if (rating >= starValue) {
                              return <Icons.Star size={25} key={i} fill="#D7AB79" />;
                            } else if (rating > i && rating < starValue) {
                              return <Icons.StarHalf size={25} key={i} fill="#D7AB79" />;
                            } else {
                              return <Icons.Star size={25} key={i} fill="transparent" stroke="#D7AB79" strokeWidth="2" />;
                            }
                          })}
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 rotate-180">
                        <Icons.Quote size={50} fill="#D7AB79" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex justify-start gap-3 mt-[28px]">
            {customerReviews?.map((item, i) => (
              <button
                key={i}
                className="custom-bullet w-[8px] h-[8px] bg-[#1E1E1E]"
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
