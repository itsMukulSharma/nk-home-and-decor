"use client";
import React, { useState, useRef, useEffect } from "react";
import { Icons } from "@/components/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const DynamicCalculator = () => {
  const [step, setStep] = useState(1);
  const [path, setPath] = useState(null); // 'kitchen', 'wardrobe', 'tv', 'vanity'
  const [selections, setSelections] = useState({});

  const sectionRef = useRef();
  const contentRef = useRef();
  const headingRef = useRef();
  const floatingRef = useRef();

  // Configuration for dynamic branching
  const config = {
    kitchen: {
      steps: [
        {
          id: 2,
          message: "Which layout matches your kitchen's blueprint?",
          field: "layout",
          options: [
            { id: "straight", label: "Straight", factor: 1.0, type: 'shape', img: "/images/kitchen.jpg" },
            { id: "lshape", label: "L-Shaped", factor: 1.4, type: 'shape', img: "/images/kitchen.jpeg" },
            { id: "parallel", label: "Parallel", factor: 1.8, type: 'shape', img: "/images/modern_kitchen.jpg" },
            { id: "ushape", label: "U-Shaped", factor: 2.2, type: 'shape', img: "/images/kitchen.jpg" },
          ]
        },
        {
          id: 3,
          message: "Select your structural core material:",
          field: "material",
          options: [
            { id: "mr", label: "Commercial MR", price: 70000, desc: "Moisture Resistant", img: "/images/woodBox.jpg" },
            { id: "bwp", label: "100% Waterproof BWP", price: 120000, desc: "Marine Grade Plywood", img: "/images/woodBoxes.jpg" },
            { id: "block", label: "BWP Blockboard", price: 180000, desc: "Direct from Inventory", img: "/images/woodBox.jpg" },
          ]
        },
        {
          id: 4,
          message: "Choose your exterior style and finish:",
          field: "finish",
          options: [
            { id: "matte", label: "Matte Laminate", multiplier: 1.0, img: "/images/modern_kitchen.jpg" },
            { id: "gloss", label: "High-Gloss", multiplier: 1.15, img: "/images/kitchen.jpg" },
            { id: "acrylic", label: "Acrylic Finish", multiplier: 1.35, img: "/images/kitchen.jpeg" },
          ]
        }
      ]
    },
    wardrobe: {
      steps: [
        {
          id: 2,
          message: "Select your wardrobe layout size:",
          field: "layout",
          options: [
            { id: "2door", label: "2-Door Compact", factor: 0.8, img: "/images/wardrobe.jpeg" },
            { id: "3door", label: "3-Door Standard", factor: 1.1, img: "/images/almirah.jpg" },
            { id: "4door", label: "4-Door Large", factor: 1.4, img: "/images/wardrobe.jpeg" },
            { id: "walkin", label: "Walk-in Wardrobe", factor: 1.9, img: "/images/almirah.jpg" },
          ]
        },
        {
          id: 3,
          message: "Choose your door type add-on:",
          field: "doorType",
          options: [
            { id: "hinged", label: "Standard Hinged", addOn: 0, img: "/images/almirah.jpg" },
            { id: "sliding", label: "Premium Sliding", addOn: 25000, img: "/images/wardrobe.jpeg" },
          ]
        },
        {
          id: 4,
          message: "Select exterior surface finish:",
          field: "finish",
          options: [
            { id: "matte", label: "Matte Laminate", multiplier: 1.0, img: "/images/wardrobe.jpeg" },
            { id: "gloss", label: "High-Gloss", multiplier: 1.15, img: "/images/almirah.jpg" },
            { id: "veneer", label: "Textured Veneer", multiplier: 1.3, img: "/images/wardrobe.jpeg" },
          ]
        }
      ]
    },
    tv: {
      steps: [
        {
          id: 2,
          message: "Select your TV unit design profile:",
          field: "layout",
          options: [
            { id: "floating", label: "Minimalist Floating", factor: 0.5, img: "/images/tv_unit.jpg" },
            { id: "wallmount", label: "Compact Wall Mount", factor: 0.8, img: "/images/tvUnit.jpg" },
            { id: "full", label: "Full Luxury Backpanel", factor: 1.3, img: "/images/tv_unit.jpg" },
          ]
        },
        {
          id: 3,
          message: "Choose your exterior finish type:",
          field: "finish",
          options: [
            { id: "matte", label: "Matte Laminate", multiplier: 1.0, img: "/images/tvUnit.jpg" },
            { id: "charcoal", label: "Charcoal/Louvered", multiplier: 1.25, img: "/images/tv_unit.jpg" },
          ]
        }
      ]
    },
    vanity: {
      steps: [
        {
          id: 2,
          message: "Select your vanity size layout:",
          field: "layout",
          options: [
            { id: "single", label: "Single Sink 2-3ft", factor: 0.4, img: "/images/apartment.jpg" },
            { id: "double", label: "Double Sink 4-5ft", factor: 0.7, img: "/images/living-room.jpg" },
          ]
        },
        {
          id: 3,
          message: "Choose your mounting style:",
          field: "mounting",
          options: [
            { id: "wall", label: "Wall-Hung Floating", addOn: 0, img: "/images/livingRoom.jpg" },
            { id: "floor", label: "Floor-Standing", addOn: 10000, img: "/images/apartment.jpg" },
          ]
        }
      ]
    }
  };

  const spaces = [
    { id: "kitchen", label: "Modular Kitchen", icon: "Brush" },
    { id: "wardrobe", label: "Master Wardrobe", icon: "Home" },
    { id: "tv", label: "TV Unit", icon: "Dashboard" },
    { id: "vanity", label: "Bathroom Vanity", icon: "Location" },
  ];

  const calculateTotal = () => {
    if (!path) return 0;
    
    let total = 0;
    const s = selections;
    const basePrices = { kitchen: 70000, wardrobe: 100000, tv: 50000, vanity: 40000 };
    
    const base = (path === 'kitchen' ? s.material?.price : basePrices[path]) || 0;
    const layoutF = s.layout?.factor || 1;
    const finishM = s.finish?.multiplier || 1;
    const addOn = (s.doorType?.addOn || 0) + (s.mounting?.addOn || 0);

    total = (base * layoutF * finishM) + addOn;
    return total;
  };

  const currentTotal = calculateTotal();
  const minPrice = currentTotal * 0.95;
  const maxPrice = currentTotal * 1.05;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSpaceSelect = (space) => {
    setPath(space.id);
    setSelections({ space: space });
    nextStep();
  };

  const handleOptionSelect = (field, item) => {
    setSelections(prev => ({ ...prev, [field]: item }));
    const currentPathSteps = config[path].steps;
    const isLastStep = step === currentPathSteps.length + 1;
    
    if (!isLastStep) {
      nextStep();
    } else {
        setStep(prev => prev + 1);
    }
  };

  const nextStep = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setStep((prev) => prev + 1);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  };

  const prevStep = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        if (step === 2) setPath(null);
        setStep((prev) => prev - 1);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  };

  const reset = () => {
    setStep(1);
    setPath(null);
    setSelections({});
  };

  // Conversational Message Logic
  const getMessage = () => {
    if (step === 1) return "What space are we transforming today?";
    const currentPathSteps = config[path]?.steps || [];
    const currentStepConfig = currentPathSteps.find(s => s.id === step);
    if (currentStepConfig) return currentStepConfig.message;
    return "Your Premium Interior Estimate is Ready";
  };

  return (
    <section 
      id="pricing-calculator"
      ref={sectionRef}
      className="relative py-[100px] lg:py-[150px] bg-[#101010] overflow-hidden border-y border-[#212121]"
    >
      <div className="container relative z-[20]">
        <div className="relative text-center mb-[60px]" ref={headingRef}>
          <h3 className="text-white text-[32px] lg:text-[120px] leading-[100%] font-bold uppercase opacity-[0.030] select-none tracking-tighter">
            Estimator
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-80px] text-white text-[24px] lg:text-[54px] font-semibold">
            {getMessage()}
          </h4>
        </div>

        {/* Floating Estimate */}
        {step > 1 && step <= (config[path]?.steps.length + 1) && currentTotal > 0 && (
            <div 
                ref={floatingRef}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#1a252f] border border-[#D7AB7C]/30 px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-6"
            >
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[#999999]">Live Estimate</span>
                    <span className="text-white font-bold text-lg">
                        {formatCurrency(minPrice)} - {formatCurrency(maxPrice)}
                    </span>
                </div>
                <div className="h-8 w-px bg-[#282828]"></div>
                <div className="text-[12px] text-[#D7AB7C] font-medium">Path: {selections.space?.label}</div>
            </div>
        )}

        <div className="max-w-[1200px] mx-auto" ref={contentRef}>
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {spaces.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSpaceSelect(s)}
                  className="group relative p-10 bg-[#161616] border border-[#282828] rounded-2xl transition-all duration-500 hover:border-[#D7AB7C] hover:-translate-y-2 flex flex-col items-center gap-6"
                >
                  <div className="w-24 h-24 rounded-xl border-2 border-dashed border-[#282828] flex items-center justify-center text-[#D7AB7C] transition-all duration-500 group-hover:border-[#D7AB7C] group-hover:bg-[#D7AB7C]/5">
                    {s.id === "kitchen" && <Icons.Brush size={40} />}
                    {s.id === "wardrobe" && <Icons.Home size={40} />}
                    {s.id === "tv" && <Icons.Dashboard size={40} />}
                    {s.id === "vanity" && <Icons.Location size={40} />}
                  </div>
                  <span className="text-xl font-medium text-white group-hover:text-[#D7AB7C] transition-colors">{s.label}</span>
                </button>
              ))}
            </div>
          )}

          {step > 1 && step <= (config[path]?.steps.length + 1) && (
            <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {config[path]?.steps.find(s => s.id === step)?.options.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => handleOptionSelect(config[path].steps.find(s => s.id === step).field, opt)}
                            className="group p-8 bg-[#161616] border border-[#282828] rounded-2xl transition-all duration-500 hover:border-[#D7AB7C] text-left flex flex-col h-full"
                        >
                            <div className="w-full aspect-[4/3] bg-[#101010] rounded-xl border-2 border-dashed border-[#212121] mb-6 flex items-center justify-center transition-colors group-hover:border-[#D7AB7C]/30 relative overflow-hidden">
                                {opt.img ? (
                                    <Image
                                        src={opt.img}
                                        alt={opt.label}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                ) : opt.type === 'shape' ? (
                                    <div className={`w-16 h-16 border-2 border-dashed border-[#282828] group-hover:border-[#D7AB7C] transition-colors rounded-sm ${
                                        opt.id === 'lshape' ? 'border-b-4 border-l-4' : 
                                        opt.id === 'ushape' ? 'border-b-4 border-l-4 border-r-4' :
                                        opt.id === 'parallel' ? 'border-l-4 border-r-4' : 'border-b-4'
                                    }`}></div>
                                ) : (
                                    <Icons.Check size={30} className="text-[#212121] group-hover:text-[#D7AB7C]/20 transition-colors" />
                                )}
                            </div>
                            <h5 className="text-xl font-bold text-white mb-2 group-hover:text-[#D7AB7C] transition-colors">{opt.label}</h5>
                            {opt.desc && <p className="text-[#555] text-xs leading-relaxed">{opt.desc}</p>}
                            {opt.price && <p className="mt-auto pt-4 text-[#D7AB7C] font-semibold">{formatCurrency(opt.price)}</p>}
                        </button>
                    ))}
                </div>
                <div className="flex justify-center pt-8">
                    <button onClick={prevStep} className="text-[#555] hover:text-[#D7AB7C] transition-colors text-xs uppercase tracking-widest flex items-center gap-2">
                    <span className="rotate-180 inline-block">→</span> Previous Step
                    </button>
                </div>
            </div>
          )}

          {step > (config[path]?.steps.length + 1) && (
            <div className="animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="p-12 bg-[#161616] border border-[#282828] rounded-[40px] relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#D7AB7C]"></div>
                        <span className="text-[12px] uppercase tracking-[0.4em] text-[#D7AB7C] font-bold block mb-6">
                            Verified Design Quote
                        </span>
                        <div className="flex flex-col gap-2">
                            <span className="text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                                {formatCurrency(minPrice)}
                            </span>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-[#282828]"></div>
                                <span className="text-xl text-[#555] font-medium italic">to</span>
                                <div className="h-px w-12 bg-[#282828]"></div>
                            </div>
                            <span className="text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                                {formatCurrency(maxPrice)}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(selections).map(([key, val], i) => (
                                <div key={i} className="p-4 bg-[#121212] border border-[#212121] rounded-xl">
                                    <p className="text-[10px] text-[#555] uppercase mb-1">{key}</p>
                                    <p className="text-white text-sm font-medium">{val.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-6 space-y-4">
                            <button className="w-full py-6 bg-[#D7AB7C] text-[#101010] font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(215,171,124,0.3)] hover:-translate-y-1">
                                Book Free 2D Layout & Site Measurement
                            </button>
                            <button onClick={reset} className="w-full py-4 text-[#555] hover:text-white transition-all text-[10px] uppercase tracking-widest">
                                Start Over
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default DynamicCalculator;
