import Image from "next/image";
import React from "react";

const Maintenance = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#161616]">
      <div className="max-w-[410px] text-center">
        <Image
          src="/images/maintain.png"
          width={411}
          height={276}
          className="w-full h-full object-cover mb-[34px]"
          alt="image"
        />
        <h2 className="text-[28px] leading-[38px] text-white font-medium">
          This page is under maintenance.
        </h2>
      </div>
    </div>
  );
};

export default Maintenance;
