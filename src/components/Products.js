"use client";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

import { TbCoinFilled } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { SiRipple } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import "../../static/css/main.css";
import { IoIosRocket } from "react-icons/io";
import { BiSolidJoystick } from "react-icons/bi";
import { BsJoystick } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoPlay } from "react-icons/io5";
import Link from "next/link";
import TableData from "./TableData";
import CryptoSlider from "./CryptoSlider";

import ProductPop from "./product/ProductPop/ProductPop";
import ProductItem from "./product/ProductItem";

const Products = () => {
  return (
    <div className="product_main my-1 grid text-white">
      <CryptoSlider />

      <div className="product_main_group2 my-4 overflow-hidden flex justify-start gap-5">
        <div className="product_main_group2_item  flex flex-col gap-2 w-40 md:w-72 rounded-lg bg-anova4 pb-2">
          <div className="product_main_group3_innergroup2_item_image">
            <Image
              className=""
              width={350}
              height={100}
              alt="image"
              src="/images/brain.jpg"
            />
            <div className="play-button-icon text-white ">
              <IoPlay />
            </div>
          </div>
          <div className="product_main_group2_item_content flex flex-col md:flex-row md:justify-between md:items-center px-2  py-1">
            <div className="product_main_group2_item_content_group1">
              <div className="product_main_group2_item_content_group1_title font-semibold">
                <p>InNepal Tech</p>
              </div>
              <div className="product_main_group2_item_content_group1_category font-medium text-xs text-anovatext1">
                <p>Monlix</p>
              </div>
            </div>
            <div className="product_main_group2_item_content_group2 mt-2 md:mt-1">
              <span className="flex flex-nowrap items-center gap-1 font-semibold">
                <TbCoinFilled className="w-4 h-4 text-yellow-400" />
                8800
              </span>
            </div>
          </div>
        </div>

        <div className="product_main_group2_item  flex flex-col gap-2 w-40 md:w-72 rounded-lg bg-anova4 pb-2">
          <div className="product_main_group3_innergroup2_item_image">
            <Image
              className=""
              width={350}
              height={100}
              alt="image"
              src="/images/brain.jpg"
            />
            <div className="play-button-icon text-white ">
              <IoPlay />
            </div>
          </div>
          <div className="product_main_group2_item_content flex flex-col md:flex-row md:justify-between md:items-center px-2  py-1">
            <div className="product_main_group2_item_content_group1">
              <div className="product_main_group2_item_content_group1_title font-semibold">
                <p>InNepal Tech</p>
              </div>
              <div className="product_main_group2_item_content_group1_category font-medium text-xs text-anovatext1">
                <p>Monlix</p>
              </div>
            </div>
            <div className="product_main_group2_item_content_group2 mt-2 md:mt-1">
              <span className="flex flex-nowrap items-center gap-1 font-semibold">
                <TbCoinFilled className="w-4 h-4 text-yellow-400" />
                8800
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium */}
      <div className="group3_premium  bg-anova2 my-5 border-2 border-anova3 rounded-lg p-4 overflow-hidden gap-2">
        <div className="product3_premium_image">
          <Image width={350} height={350} src="/images/dot.png" />
        </div>
        <div className="product_main_group3_sub1 w-full z-20  flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2 items-center text-green-400 font-medium text-lg">
              <TbCoinFilled />
              Premium
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
              View all
            </button>
          </div>
        </div>

        <div className="product_main_group3_sub2 z-30 owl-carousel owl-theme flex gap-5">
          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />
        </div>
      </div>

      <div className="product_main_group3 my-5 z-20 overflow-hidden gap-2">
        <div className="product_main_group3_sub1 flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2 items-center text-anovatext1 font-medium text-lg">
              <IoIosStar />
              Featured
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
              View all
            </button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />
        </div>
      </div>

      <div className="product_main_group3 my-5 overflow-hidden gap-2">
        <div className="product_main_group3_sub1 flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2 items-center text-anovatext1 font-medium text-lg">
              <IoIosRocket />
              Popular
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
              View all
            </button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />
        </div>
      </div>

      <div className="product_main_group3 my-5 overflow-hidden gap-2">
        <div className="product_main_group3_sub1 flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2 items-center text-anovatext1 font-medium text-lg">
              <BiSolidJoystick />
              Games
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
              View all
            </button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />
        </div>
      </div>

      <div className="product_main_group3 my-5 overflow-hidden gap-2">
        <div className="product_main_group3_sub1 flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2 items-center text-anovatext1 font-medium text-lg">
              <BsJoystick />
              Providers
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
              View all
            </button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />
        </div>
      </div>

      <div className="product_main_group3 my-5 overflow-hidden gap-2">
        <div className="product_main_group3_sub1 flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2  items-center text-anovatext1 font-medium text-lg">
              <IoIosRocket />
              Popular
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 hover:bg-green-600 hover:bg-green-600 px-4 py-2 rounded-lg">
              View all
            </button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />

          <ProductItem />
        </div>
      </div>

      <TableData />
    </div>
  );
};

export default Products;
