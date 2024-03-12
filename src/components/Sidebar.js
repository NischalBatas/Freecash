import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Sidebar = () => {
  return (

      <div className="fixed sidebar-main bg-anovanavbar w-56 h-screen p-2 mt-1">
        <div className="sidebar-main-list-group-1">
            <ul>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 mb-2 p-2 hover:bg-anova6"><FaHome /><span>Home</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><FaHome /><span>Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><FaHome /><span>Category</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><FaHome /><span>About</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><FaHome /><span>Contact</span></Link></li>
            </ul>
        </div>
    <hr className="px-2 border-anovatext2"/>
        <div className="sidebar-main-list-group-2">
            <ul>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Featured</p><span className="bg-anovatext2 rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>All</p><span className="bg-anovatext2 rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Apps</p><span className="bg-anovatext2 rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Games</p><span className="bg-anovatext2 rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Surveys</p><span className="bg-anovatext2 rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>GPT</p><span className="bg-anovatext2 rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Deposits</p><span className="bg-anovatext2 rounded-full px-1 text-center">10</span></Link></li>

                  </ul>
        </div>

        <hr className="px-2 border-anovatext2"/>

        <div className="sidebar-main-list-group-3 my-2">
            <ul>
                <li><Link href='#' className="flex items-center text-anovatext1 text-xs gap-2 my-1 p-1 hover:bg-anova6"><p>Frequently Asked</p></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-xs gap-2 my-1 p-1 hover:bg-anova6"><p>Terms & Conditions</p></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-xs gap-2 my-1 p-1 hover:bg-anova6"><p>Privacy Policy</p></Link></li>
              
                  </ul>
        </div>

        <hr className="px-2 border-anovatext2"/>
        <div className="sidebar-main-list-group-2">
            <ul>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 bg-anova6"><Image width={28} height={28} src='/images/Nepal.png'/><p>Nepal</p></Link></li>
                <ul className="flex justify-between my-4">
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-blue-800 rounded-full"><FaFacebook /><span className="text-xs hidden">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-pink-600 rounded-full"><FaInstagram /><span className="text-xs hidden">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-blue-400 rounded-full"><FaXTwitter /><span className="text-xs hidden">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-purple-800 rounded-full"><FaViber /><span className="text-xs hidden">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-yellow-600 rounded-full"><MdOutlineEmail /><span className="text-xs hidden">Product</span></Link></li>

                
                  </ul>
                  </ul>
        </div>
      </div>
   
  );
};

export default Sidebar;
