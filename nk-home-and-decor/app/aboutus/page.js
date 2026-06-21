import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/libs/sanity";
import { aboutQuery } from "@/libs/sanityQueries";

export const revalidate = 60; // Revalidate every 60 seconds

const AboutUsPage = async () => {
  let aboutData = null;

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      aboutData = await client.fetch(aboutQuery);
    }
  } catch (error) {
    console.error("Error fetching about page data from Sanity:", error);
  }

  // Fallback data if sanity is empty or errors
  const title = aboutData?.title || "We don't just build furniture—we craft the heart of your home.";
  const description = aboutData?.description || "At NK Home and Decor, our work is deeply personal. Born from an appreciation for quality wood, premium hardware, and smart layout planning, we bring custom modular kitchens, wardrobe solutions, and TV panels to life across Haryana.";
  const story = aboutData?.story || "Our journey began in May 2025 as a family-run hardware and premium plywood supplier. We quickly learned that homeowners wanted spaces that made sense for their daily routines. Today, we manage the entire lifecycle under one roof: from detailed 2D layouts to final carpenter installations.";

  return (
    <div className="bg-[#101010] min-h-screen text-white pt-[100px] lg:pt-[140px] pb-[80px]">
      {/* Decorative top border */}
      <div className="w-full h-px bg-[#212121]"></div>

      {/* Hero Header */}
      <div className="container relative py-12 lg:py-16 text-center">
        <h1 className="text-white text-[35px] lg:text-[110px] leading-[100%] font-bold uppercase opacity-[0.03] select-none tracking-tighter absolute left-1/2 -translate-x-1/2 top-4 w-full">
          OUR CRAFT
        </h1>
        <h2 className="relative text-[28px] lg:text-[45px] font-bold text-white tracking-tight uppercase">
          About <span className="text-[#D7AB7C]">NK Home & Decor</span>
        </h2>
        <p className="text-[#999999] text-xs lg:text-sm uppercase tracking-[0.3em] mt-3">
          Gharaunda, Karnal, Haryana
        </p>
      </div>

      <div className="container">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-6">
          {/* Image Side */}
          <div className="lg:col-span-5 relative aspect-[3/4] rounded-[24px] overflow-hidden border border-[#212121] group shadow-2xl">
            <span className="block absolute top-0 left-0 w-full h-full bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></span>
            <Image
              src="/images/about.jpg"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Artisan craftsmanship"
              sizes="(max-w-768px) 100vw, 40vw"
              priority
            />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 border-l-2 border-[#D7AB7C]">
              <h3 className="text-xl lg:text-2xl font-bold text-[#D7AB7C] uppercase tracking-wide">
                Our Work Philosophy
              </h3>
              <p className="text-white text-lg lg:text-2xl font-medium leading-relaxed tracking-tight mt-3">
                {title}
              </p>
            </div>

            <p className="text-[#999999] text-base leading-relaxed">
              {description}
            </p>

            <p className="text-[#999999] text-base leading-relaxed font-light">
              {story}
            </p>

            {/* Micro details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#212121]">
              <div>
                <h4 className="text-[#D7AB7C] font-bold text-3xl">100%</h4>
                <p className="text-[#555] text-xs uppercase tracking-widest mt-1">BWP Marine Ply</p>
              </div>
              <div>
                <h4 className="text-[#D7AB7C] font-bold text-3xl">May 2025</h4>
                <p className="text-[#555] text-xs uppercase tracking-widest mt-1">Our Humble Start</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[#D7AB7C] font-bold text-3xl">Artisan</h4>
                <p className="text-[#555] text-xs uppercase tracking-widest mt-1">On-Site Carpentry</p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Categories Sub-showcase */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider text-white">
              What We <span className="text-[#D7AB7C]">Specialise In</span>
            </h3>
            <p className="text-[#555] text-xs uppercase tracking-widest mt-2">
              Tailored solutions directly from our inventory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kitchen Card */}
            <div className="p-8 bg-[#161616] border border-[#212121] rounded-2xl transition-all duration-500 hover:border-[#D7AB7C] group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D7AB7C]/10 flex items-center justify-center text-[#D7AB7C] mb-6 font-bold text-lg group-hover:bg-[#D7AB7C] group-hover:text-[#101010] transition-all duration-500">
                  01
                </div>
                <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-[#D7AB7C] transition-colors">
                  Modular Kitchens
                </h4>
                <p className="text-[#777777] text-sm leading-relaxed mb-6">
                  Constructed with marine-grade waterproof BWP plywood and anti-scratch acrylics. Custom clearances planned in detail.
                </p>
              </div>
              <Link href="/#pricing-calculator" className="text-[#D7AB7C] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:underline">
                Explore Estimator <span>→</span>
              </Link>
            </div>

            {/* Wardrobes Card */}
            <div className="p-8 bg-[#161616] border border-[#212121] rounded-2xl transition-all duration-500 hover:border-[#D7AB7C] group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D7AB7C]/10 flex items-center justify-center text-[#D7AB7C] mb-6 font-bold text-lg group-hover:bg-[#D7AB7C] group-hover:text-[#101010] transition-all duration-500">
                  02
                </div>
                <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-[#D7AB7C] transition-colors">
                  Luxury Wardrobes
                </h4>
                <p className="text-[#777777] text-sm leading-relaxed mb-6">
                  Sliding or hinged configurations curated from premium laminates and soft-close German runners to streamline your storage.
                </p>
              </div>
              <Link href="/#pricing-calculator" className="text-[#D7AB7C] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:underline">
                Explore Estimator <span>→</span>
              </Link>
            </div>

            {/* TV Panels Card */}
            <div className="p-8 bg-[#161616] border border-[#212121] rounded-2xl transition-all duration-500 hover:border-[#D7AB7C] group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D7AB7C]/10 flex items-center justify-center text-[#D7AB7C] mb-6 font-bold text-lg group-hover:bg-[#D7AB7C] group-hover:text-[#101010] transition-all duration-500">
                  03
                </div>
                <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-[#D7AB7C] transition-colors">
                  Bespoke TV Panels
                </h4>
                <p className="text-[#777777] text-sm leading-relaxed mb-6">
                  Fluted charcoal accents and floating consoles designed to match your TV screens and eliminate visual wire clutter.
                </p>
              </div>
              <Link href="/#pricing-calculator" className="text-[#D7AB7C] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:underline">
                Explore Estimator <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-24 bg-[linear-gradient(rgba(16,16,16,0.9),rgba(16,16,16,0.9)),url('/images/tag-bg.jpg')] bg-cover bg-center border border-[#212121] rounded-[32px] p-8 lg:p-16 text-center space-y-6">
          <h3 className="text-2xl lg:text-4xl font-bold uppercase tracking-tight text-white max-w-[600px] mx-auto leading-tight">
            Ready to design a home that is truly <span className="text-[#D7AB7C]">yours</span>?
          </h3>
          <p className="text-[#999999] text-sm max-w-[420px] mx-auto leading-relaxed">
            Let’s start with a detailed on-site measurement and 2D layout planning. Zero hassle, total precision.
          </p>
          <div className="pt-4">
            <Link 
              href="/#contact"
              className="inline-block px-10 py-5 bg-[#D7AB7C] text-[#101010] font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-500 hover:bg-white hover:shadow-[0_15px_30px_rgba(215,171,124,0.3)] hover:-translate-y-0.5"
            >
              Get In Touch With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
