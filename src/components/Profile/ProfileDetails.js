import { Avatar } from "@radix-ui/themes";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileId from "./ProfileId/ProfileId";
import ProfileStats from "./ProfileStats/ProfileStats";

const ProfileDetails = () => {
  return (
    <div className="profiledetail-main mt-10 mb-10">
      <ProfileInfo/>
      <hr/>
      <ProfileId/>
      <hr/>
      <ProfileStats/>
      <hr/>
    </div>
  );
};

export default ProfileDetails;
