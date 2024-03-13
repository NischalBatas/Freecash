import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { SiRipple } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import '../../static/css/main.css'
import { IoIosRocket } from "react-icons/io";
import { BiSolidJoystick } from "react-icons/bi";
import { BsJoystick } from "react-icons/bs";
const Product = () => {
  return (
    <div className="product_main my-1 grid">
      <div className="product_main_group1 mb-2 overflow-hidden flex justify-start gap-2">
        <div className="product_main_group1_sub1 px-3 bg-anovanavbar flex justify-center items-center rounded">
          <span className=" ">
            <GoDotFill className="text-green-500" />
          </span>
        </div>

        <div className="product_main_group1_sub2 flex gap-2 owl-carousel owl-theme">
          <div className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
            <div className="product_main_group1_sub2_image">
              <SiBitcoinsv className="w-6 h-6 text-orange-400" />
            </div>
            <div className="product_main_group1_sub2_content text-xs">
              <div className="product_main_group1_sub2_content_title font-medium">
                <p>Bitcoin</p>
              </div>
              <div className="product_main_group1_sub2_content_time text-anovatext1">
                <p>2m ago</p>
              </div>
            </div>
            <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
              <span>$640</span>
            </div>
          </div>

          <div className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
            <div className="product_main_group1_sub2_image">
              <FaEthereum className="w-6 h-6 text-blue-400" />
            </div>
            <div className="product_main_group1_sub2_content text-xs">
              <div className="product_main_group1_sub2_content_title font-medium">
                <p>Ethereum</p>
              </div>
              <div className="product_main_group1_sub2_content_time text-anovatext1">
                <p>2m ago</p>
              </div>
            </div>
            <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
              <span>$640</span>
            </div>
          </div>

          <div className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
            <div className="product_main_group1_sub2_image">
              <SiTether className="w-6 h-6 text-green-500" />
            </div>
            <div className="product_main_group1_sub2_content text-xs">
              <div className="product_main_group1_sub2_content_title font-medium">
                <p>Tether</p>
              </div>
              <div className="product_main_group1_sub2_content_time text-anovatext1">
                <p>2m ago</p>
              </div>
            </div>
            <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
              <span>$640</span>
            </div>
          </div>

          <div className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
            <div className="product_main_group1_sub2_image">
              <SiRipple className="w-6 h-6 text-gray-500" />
            </div>
            <div className="product_main_group1_sub2_content text-xs">
              <div className="product_main_group1_sub2_content_title font-medium">
                <p>Ripple</p>
              </div>
              <div className="product_main_group1_sub2_content_time text-anovatext1">
                <p>2m ago</p>
              </div>
            </div>
            <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
              <span>$640</span>
            </div>
          </div>

          <div className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
            <div className="product_main_group1_sub2_image">
              <SiBinance className="w-6 h-6 text-blue-800" />
            </div>
            <div className="product_main_group1_sub2_content text-xs">
              <div className="product_main_group1_sub2_content_title font-medium">
                <p>Binance</p>
              </div>
              <div className="product_main_group1_sub2_content_time text-anovatext1">
                <p>2m ago</p>
              </div>
            </div>
            <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
              <span>$640</span>
            </div>
          </div>

          <div className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
            <div className="product_main_group1_sub2_image">
              <TbCurrencySolana className="w-6 h-6 text-red-600" />
            </div>
            <div className="product_main_group1_sub2_content text-xs">
              <div className="product_main_group1_sub2_content_title font-medium">
                <p>Solana</p>
              </div>
              <div className="product_main_group1_sub2_content_time text-anovatext1">
                <p>2m ago</p>
              </div>
            </div>
            <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
              <span>$640</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product_main_group2 my-4 overflow-hidden flex justify-start gap-5">
        <div className="product_main_group2_item  flex flex-col gap-2 w-40 md:w-72 rounded-lg bg-anova4">
          <div className="product_main_group2_item_image">
            <Image
              className="min-h-52 max-h-52"
              width={350}
              height={100}
              alt="image"
              src="/images/brain.jpg"
            />
          </div>
          <div className="product_main_group2_item_content flex justify-between items-center px-2 pt-1 pb-2">
            <div className="product_main_group2_item_content_group1">
              <div className="product_main_group2_item_content_group1_title font-semibold">
                <p>InNepal Tech</p>
              </div>
              <div className="product_main_group2_item_content_group1_category font-medium text-xs text-anovatext1">
                <p>Monlix</p>
              </div>
            </div>
            <div className="product_main_group2_item_content_group2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold">
                <SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8800
              </span>
            </div>
          </div>
        </div>
        <div className="product_main_group2_item  flex flex-col gap-2 w-40 md:w-72 rounded-lg bg-anova4">
          <div className="product_main_group2_item_image">
            <Image
              className="min-h-52 max-h-52"
              width={350}
              height={350}
              alt="image"
              src="/images/course1.jpg"
            />
          </div>
          <div className="product_main_group2_item_content flex justify-between items-center px-2 pt-1 pb-2">
            <div className="product_main_group2_item_content_group1">
              <div className="product_main_group2_item_content_group1_title font-semibold">
                <p>InNepal Tech</p>
              </div>
              <div className="product_main_group2_item_content_group1_category font-medium text-xs text-anovatext1">
                <p>Monlix</p>
              </div>
            </div>
            <div className="product_main_group2_item_content_group2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold">
                <SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8800
              </span>
            </div>
          </div>
        </div>
      </div>

{/* Premium */}
<div className="group3_premium bg-[url('/images/dot.png')] bg-no-repeat bg-anova2 my-5 border-2 border-anova3 rounded-lg p-4 overflow-hidden gap-2">
      <div className="product_main_group3_sub1  flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2 items-center text-green-400 font-medium text-lg">
              <SiBitcoinsv />
              Premium
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 px-4 py-2 rounded-lg">View all</button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>

          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product_main_group3 my-5 overflow-hidden gap-2">
      <div className="product_main_group3_sub1 flex justify-between mb-3">
          <div className="product_main_group3_innergroup1_sub1">
            <span className="flex gap-2 items-center text-anovatext1 font-medium text-lg">
              <IoIosStar />
              Featured
            </span>
          </div>

          <div className="product_main_group3_innergroup1_sub2">
            <button className="bg-anova4 px-4 py-2 rounded-lg">View all</button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>

          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>
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
            <button className="bg-anova4 px-4 py-2 rounded-lg">View all</button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>

          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>
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
            <button className="bg-anova4 px-4 py-2 rounded-lg">View all</button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>

          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>
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
            <button className="bg-anova4 px-4 py-2 rounded-lg">View all</button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>

          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>
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
            <button className="bg-anova4 px-4 py-2 rounded-lg">View all</button>
          </div>
        </div>

        <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>

          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>


          <div className="product_main_group3_sub2_item bg-anova4 w-32 p-3 flex flex-col rounded-lg">
            <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
              <Image
                className="rounded-lg"
                width={150}
                height={150}
                alt="image"
                src="/images/dots.jpg"
              />
            </div>
            <div className="product_main_group3_innergroup2_item_content mt-3">
            <div className="product_main_group3_innergroup2_item_content_title font-semibold text-sm">
              <p>BitLabs Surveys</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
              <p>CryptoCurrency</p>
              </div>
              <div className="product_main_group3_innergroup2_item_content_price mt-2">
              <span className="flex flex-nowrap items-center gap-1 font-semibold"><SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                8,800
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      <div className="product_main_group4"></div>
    </div>
  );
};

export default Product;
