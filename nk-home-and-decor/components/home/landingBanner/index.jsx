import React from "react";

const LandingBanner = () => {
  return (
    <section className="relative h-screen">
      <div className=" w-full h-full">
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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
    </section>
  );
};

export default LandingBanner;
