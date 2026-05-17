import React from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";

const WhatsAppWidget = () => {
  return (
    <div className="fixed bottom-[30px] right-[30px] z-[9999]">
      <Link
        href="https://wa.me/918168519429?text=Hi%20NK%20Home%20and%20Decor..."
        target="_blank"
        className="flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <Icons.WhatsApp size={35} />
      </Link>
    </div>
  );
};

export default WhatsAppWidget;
