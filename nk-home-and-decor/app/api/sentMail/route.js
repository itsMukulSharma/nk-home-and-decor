const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let payload = await request.json();
    console.log("form", payload);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465, // Use 587 for TLS
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOption = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: "New customer details",
      text: JSON.stringify(payload, null, 2),
    };
    await transporter.sendMail(mailOption);
    return NextResponse.json({ message: "Email sent", status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to send", status: 500 });
  }
}
