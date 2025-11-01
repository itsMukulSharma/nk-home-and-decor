import localFont from "next/font/local";

export const Montserrat = localFont({
  display: "swap",
  variable: "--font-primary",
  src: [
    {
      path: "../public/fonts/Montserrat-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
