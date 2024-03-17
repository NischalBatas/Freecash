"use client"
import CryptoSlider from "@/components/CryptoSlider";
import ProfileDetails from "@/components/Profile/ProfileDetails";
import TableData from "@/components/TableData";
import React from "react";

const page = () => {
  return (
    <div>
      <CryptoSlider />
      <ProfileDetails/>
      <TableData/>
    </div>
  );
};

export default page;
