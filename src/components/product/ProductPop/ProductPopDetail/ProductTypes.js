import React from "react";
import { MdVerifiedUser } from "react-icons/md";
const ProductTypes = () => {
  const listData = [
    { icon: MdVerifiedUser, title: "Clicked", subTitle: "Status" },
    { icon: MdVerifiedUser, title: "Very low", subTitle: "Popularity" },
    { icon: MdVerifiedUser, title: "Casino", subTitle: "Category" },
    { icon: MdVerifiedUser, title: "Lootably", subTitle: "Provider" },
  ];
  return (
    <div className="producttype-main my-6  grid grid-cols-2 md:grid-cols-4 content-center gap-2">
      {listData.map((item,index) => {
        return (
          <div key={index} className="producttype-main-list grid-span-1 rounded-lg bg-anova4 p-1">
            <div className="producttype-main-list-group1 flex justify-center items-center gap-2">
              <div className="producttype-main-list-group1-icon">
                {<item.icon className="text-green-500" />}
              </div>
              <div className="producttype-main-list-group1-title font-semibold">
                <span>{item.title}</span>
              </div>
            </div>

            <div className="producttype-main-list-group1-subtitle flex justify-center items-center text-xs font-semibold">
              <span>{item.subTitle}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTypes;
