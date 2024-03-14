"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import "./navbar.css";

import Logo from "@/components/Logo";
import AnimatedSearchBar from "../AnimatedSearchBar";
import DeviceSelectDropDown from "../DeviceSelectDropDown";
import SignSignUpModal from "../SignSignUpModal";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-anovanavbar flex justify-between items-center py-3 px-4">
      <div className="navbar_group1 flex gap-4">
        <Logo />
        <AnimatedSearchBar />
      </div>

      <div className="navbar_group2 flex gap-2">
        <DeviceSelectDropDown />

        <div className="signin-group">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button className="bg-green-600">Sign In</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent bg-anova3 text-white">
                <SignSignUpModal />
                <Dialog.Close asChild>
                  <Button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </Button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
