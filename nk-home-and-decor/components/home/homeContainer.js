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
import WhatsAppWidget from "../whatsappWidget";
import Process from "./process";

import LivspaceCalculator from "./livspaceCalculator";

const HomeContainer = ({ sanityData = {} }) => {
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
      <LandingBanner data={sanityData.hero} />
      <WhyChooseUs data={sanityData.whyChooseUs} />
      <AboutUs data={sanityData.about} />
      <Process data={sanityData.process} />
      <LivspaceCalculator data={sanityData.livspaceCalculator} />
      <BestServices data={sanityData.services} />
      <LatestWork data={sanityData.gallery} />
      <Testimonials data={sanityData.testimonials} />
      <LetsConnect data={sanityData.contact} />
      <WhatsAppWidget />
    </>
  );
};

export default HomeContainer;
