import { Avatar } from "@radix-ui/themes";
import React from "react";
import { TbCoinFilled } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { RiMacbookLine } from "react-icons/ri";
import { ImTablet } from "react-icons/im";
import Image from "next/image";

const ProductPopDetail = () => {
  return (
    <div className="popDetail-main flex flex-col justify-center items-center my-4 ">
      <div className="popDetail-main-image">
        <Image
          className="rounded-lg"
          width={100}
          height={100}
          alt="image"
          src="/images/dots.jpg"
        />
      </div>
      <div className="popDetail-main-title font-semibold my-3">
        <span className="text-white">BitLabs Surveys</span>
      </div>
      <div className="popDetail-main-price flex items-center mb-1">
        <TbCoinFilled className="mr-1 text-yellow-500" />
        <span className="font-semibold text-white">1000</span>
      </div>
      <div className="popDetail-main-devices">
        <div className="popDetail-main-devices-item flex gap-2 item-center">
          <div className="bg-anova6 rounded-full text-xs p-1"><FaApple /></div>
          <div className="bg-anova6 rounded-full text-xs p-1"><FaMobileAlt /></div>
          <div className="bg-anova6 rounded-full text-xs p-1"><FaWindows /></div>
          <div className="bg-anova6 rounded-full text-xs p-1"><RiMacbookLine /></div>

          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default ProductPopDetail;
