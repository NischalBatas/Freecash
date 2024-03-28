import React from "react";
import { TbCoinFilled } from "react-icons/tb";
import { IoWalletSharp } from "react-icons/io5";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { IoToggle } from "react-icons/io5";
import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import * as HoverCard from "@radix-ui/react-hover-card";
import Link from "next/link";

const ProfileAvatar = () => {
  return (
    <div className="hidden md:block ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button className="profile-group-pop">
            <Avatar
              className="mr-2"
              size="2"
              radius="full"
              src="/images/course.jpg"
              fallback="N"
            />
            <CaretDownIcon width="12" height="12" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="windows-group2">
          <DropdownMenu.Item className="gap-1">
          <Link href='/profile'>Profile</Link>                   
          </DropdownMenu.Item>
          <hr/>
          <DropdownMenu.Item className="gap-1">
          <Link href='/profile'>Logout</Link>                   
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default ProfileAvatar;
