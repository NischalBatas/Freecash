
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { SiRipple } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
const CryptoSlider = () => {
    const cryptoList=[
        {icon:SiBitcoinsv,title:"Bitcoin",time:"2 min ago", price:680,color:'orange'},
        {icon:FaEthereum,title:"Ethereum",time:"2 min ago", price:680,color:'blue'},
        {icon:SiTether,title:"Tether",time:"2 min ago", price:680,color:'green'},
        {icon:SiRipple,title:"Ripple",time:"2 min ago", price:680,color:'gray'},
        {icon:SiBinance,title:"Binance",time:"2 min ago", price:680,color:'blue'},
    ]

    const [crypto,setCrypto]=useState(cryptoList)
  return (
    <div className="product_main_group1 text-white mb-2 overflow-hidden flex justify-start gap-2 mt-1">
    <div className="product_main_group1_sub1 px-3 bg-anovanavbar flex justify-center items-center rounded">
      <span className=" ">
        <GoDotFill className="text-green-500" />
      </span>
    </div>

    <div className="product_main_group1_sub2 flex gap-2 owl-carousel owl-theme">
     {crypto.map((item,index)=>{
        return(
            <div className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
            <div className="product_main_group1_sub2_image">
              {<item.icon className={`w-6 h-6 text-${item.color}-400`}/>}
            </div>
            <div className="product_main_group1_sub2_content text-xs">
              <div className="product_main_group1_sub2_content_title font-medium">
                <p>{item.title}</p>
              </div>
              <div className="product_main_group1_sub2_content_time text-anovatext1">
                <p>{item.time}</p>
              </div>
            </div>
            <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
              <span>${item.price}</span>
            </div>
          </div>
        )
     })}

    </div>
  </div>
  )
}

export default CryptoSlider