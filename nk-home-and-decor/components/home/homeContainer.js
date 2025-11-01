"use client";
import React, { useEffect, useState } from "react";
import LandingBanner from "./landingBanner";
import WhyChooseUs from "./whyChooseUs";
import PageLoader from "../loader";
import AboutUs from "./aboutUs";
import BestServices from "./services";
import LatestWork from "./latestWork";
import Testimonials from "./testimonials";
import LetsConnect from "./letsConnect";

const HomeContainer = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // 10 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <PageLoader loaded={loaded} />
      <LandingBanner />
      <WhyChooseUs />
      <AboutUs />
      <BestServices />
      <LatestWork />
      <Testimonials />
      <LetsConnect />
    </>
  );
};

export default HomeContainer;
