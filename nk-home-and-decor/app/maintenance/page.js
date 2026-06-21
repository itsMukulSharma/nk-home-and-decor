import Image from "next/image";
import Link from "next/link";
import React from "react";

const Maintenance = () => {
  return (
    <div className="w-full min-h-[75vh] flex flex-col justify-center items-center bg-[#161616] py-[80px] lg:py-[120px] px-6">
      <div className="max-w-[450px] w-full text-center flex flex-col items-center">
        <div className="relative w-full max-w-[350px] aspect-[1.5/1] mb-8">
          <Image
            src="/images/maintain.png"
            fill
            className="object-contain"
            alt="Under construction"
            priority
          />
        </div>
        <h2 className="text-[28px] lg:text-[36px] leading-tight text-white font-semibold mb-4 tracking-tight uppercase">
          Under <span className="text-[#D7AB7C]">Maintenance</span>
        </h2>
        <p className="text-[#999999] text-[15px] lg:text-base leading-relaxed mb-10 max-w-[360px]">
          We are currently crafting something beautiful for this page. Please check back later!
        </p>
        <Link 
          href="/" 
          className="inline-block px-10 py-5 bg-[#D7AB7C] text-[#101010] font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-500 hover:bg-white hover:shadow-[0_15px_30px_rgba(215,171,124,0.3)] hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Maintenance;
