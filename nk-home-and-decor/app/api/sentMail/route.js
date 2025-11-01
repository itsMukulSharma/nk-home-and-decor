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
        user: "rohit.ahlawat@techchefz.com",
        pass: "tlzdetyrbjfhopul",
      },
    });
    const mailOption = {
      from: "rohit.ahlawat@techchefz.com",
      to: "13rohitahlawat@gmail.com",
      subject: "New customer details",
      text: payload,
    };
    await transporter.sendMail(mailOption);
    return NextResponse.json({ message: "Email sent", status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to send", status: 500 });
  }
}
