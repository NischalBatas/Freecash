import React from "react";

const ProfileStatsData = () => {
    const listData=[
        {title:"Balance",amount:0},
        {title:"Offers Completed",amount:0},
        {title:"Coins Earned",amount:0},
        {title:"Referral Earnings",amount:0},
        {title:"Referrer",amount:"DollahBot"},
        {title:"Users Referred",amount:0},
    ]
  return (
    <div className="profilestats-main-items grid grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
     {listData.map((item,index)=>{
        return(
            <div key={index} className="profilestats-main-items-list col-span-1 bg-anova4 flex flex-col justify-center items-center px-1 py-3 rounded-lg">
            <div className="profilestats-main-items-list-title text-sm">
              <span>{item.title}</span>
            </div>
            <div className="profilestats-main-items-list-number text-white font-semibold">
              <span>{item.amount}</span>
            </div>
          </div>
        )
     })}
    </div>
  );
};

export default ProfileStatsData;
