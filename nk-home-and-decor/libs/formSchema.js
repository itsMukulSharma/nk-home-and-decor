"use client";
import * as yep from "yup";
let EMAIL_REGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,5}){1,2}$/;
export const commonValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  lastName: yep
    .string()
    .required("Last Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  email: yep
    .string()
    .email("Please enter a valid Email.")
    .matches(EMAIL_REGX, "Please enter a valid Email.")
    .required("Email address is required."),
  phone: yep
    .string()
    .required("Phone number is required.")
    .matches(/^[1-9][0-9]+$/, "Number is invalid.")
    .min(7, "Minimum 10 digits are allowed.")
    .max(15, "Maximum 12 digits are allowed."),
  countyCode: yep.string().required("Country code is required."),
  completeAddress: yep.string().required("Purpose is required."),
});
