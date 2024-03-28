 'use client'
import LastTransactionItem from "@/components/LastTransactionsItem";
import { GoDotFill } from "react-icons/go";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { SiRipple } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
import { useState } from "react";

export default function LastTransactionItemHolder() {
  const cryptoList = [
    {
      icon: SiBitcoinsv,
      title: "Bitcoin",
      time: "2 min ago",
      price: 680,
      color: "yellow",
    },
    {
      icon: FaEthereum,
      title: "Ethereum",
      time: "2 min ago",
      price: 680,
      color: "red",
    },
    {
      icon: SiTether,
      title: "Tether",
      time: "2 min ago",
      price: 680,
      color: "green",
    },
    {
      icon: SiRipple,
      title: "Ripple",
      time: "2 min ago",
      price: 680,
      color: "gray",
    },
    {
      icon: SiBinance,
      title: "Binance",
      time: "2 min ago",
      price: 680,
      color: "blue",
    },
  ];

  const [crypto, setCrypto] = useState(cryptoList);

  return (
    <div className="product_main_group1 text-white mb-2 overflow-hidden flex justify-start gap-2 mt-1">
    <div className="product_main_group1_sub1 px-3 bg-anovanavbar flex justify-center items-center rounded">
      <span className=" ">
        <GoDotFill className="text-green-500" />
      </span>
    </div>

    <div className="product_main_group1_sub2 flex gap-2 owl-carousel owl-theme">
      {crypto.map((item, index) => {
        return (
          <LastTransactionItem key={index} item={item}/>
        );
      })}
    </div>
  </div>
  );
}
