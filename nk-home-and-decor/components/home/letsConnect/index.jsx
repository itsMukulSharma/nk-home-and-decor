"use client";
import React from "react";
import { commonValidationSchema } from "@/libs/formSchema";
import { useFormik } from "formik";
import { triggerMail } from "@/libs/triggerMail";
import Image from "next/image";

const LetsConnect = () => {
  const formInitialSchema = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countyCode: "+91",
    completeAddress: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formInitialSchema,
      validationSchema: commonValidationSchema,
      onSubmit: (values, action) => {
        console.log("form", values);
        triggerMail({ content: JSON.stringify(values) });
        setTimeout(() => {
          action.resetForm();
        }, 4000);
      },
    });

  return (
    <section id="contact" className="relative py-[90px] bg-[#161616]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/world.jpg')] bg-center bg-cover"></div>
      <div className="container relative z-[10]">
        <div className="relative text-center mb-[16px] lg:mb-0">
          <h3 className="text-white text-[32px] lg:text-[100px] leading-[100%] font-bold uppercase opacity-[0.040]">
            Connect Us
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-80px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold title-bottom-line title-bottom-dot  title-bottom-line-anim">
            Know more<span className="text-[#D7AB7C]"> about us</span>
          </h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-[40px]">
          <div className="lg:col-span-4">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                <div className="relative">
                  <label htmlFor="firstName" className="form-label">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-input"
                    placeholder="Enter first name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <p className="absolute bottom-[-20px] left-0 text-[12px] leading-[18px] text-[#da291c]">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="lastName" className="form-label">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-input"
                    placeholder="Enter last name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="absolute bottom-[-20px] left-0 text-[12px] leading-[18px] text-[#da291c]">
                      {errors.lastName}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="form-label">
                    Phone number*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-input"
                    placeholder="Enter phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {touched.phone && errors.phone && (
                    <p className="absolute bottom-[-20px] left-0 text-[12px] leading-[18px] text-[#da291c]">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="email" className="form-label">
                    Enter email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <p className="absolute bottom-[-20px] left-0 text-[12px] leading-[18px] text-[#da291c]">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="relative lg:col-span-2">
                  <label htmlFor="completeAddress" className="form-label">
                    Complete address*
                  </label>
                  <textarea
                    rows="4"
                    name="completeAddress"
                    id="completeAddress"
                    className="form-textarea"
                    placeholder="Enter complete address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.completeAddress}
                  ></textarea>
                  {touched.completeAddress && errors.completeAddress && (
                    <p className="absolute bottom-[-10px] left-0 text-[12px] leading-[18px] text-[#da291c]">
                      {errors.completeAddress}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full lg:w-auto text-[16px] inline-block uppercase bg-[#282828] px-[35px] py-[12px] mt-[24px] border border-[#282828] text-white transition duration-500 relative z-[1] cursor-pointer group hover:border-[#D9AB7A] contact-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-3">
            <Image
              src="/images/contact.png"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
