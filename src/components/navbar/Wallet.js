import React from "react";
import { TbCoinFilled } from "react-icons/tb";
import { IoWalletSharp } from "react-icons/io5";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { IoToggle } from "react-icons/io5";
import { Button, DropdownMenu } from "@radix-ui/themes";
const Wallet = () => {
  return (
    <div className="hidden md:block ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button className="windows-group">
            <TbCoinFilled className="text-yellow-400" />
            <span>0</span>
            <CaretDownIcon width="12" height="12" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="windows-group2">
          <DropdownMenu.Item className="gap-1">
            <span className="show-money">Show USD</span>
            <IoToggle className="text-lg" />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Wallet;
