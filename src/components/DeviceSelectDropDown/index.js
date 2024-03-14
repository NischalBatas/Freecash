import { Button, DropdownMenu } from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { FaApple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { RiMacbookLine } from "react-icons/ri";
import { ImTablet } from "react-icons/im";

export default function DeviceSelectDropDown() {
  return (
    <div className="hidden md:block ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button className="windows-group">
            Windows
            <CaretDownIcon width="12" height="12" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="soft" color="indigo">
          <DropdownMenu.Item shortcut="⌘ E">
            <FaMobileAlt />
            Andriod
          </DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">
            <FaApple /> iPhone
          </DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ E">
            <ImTablet />
            iPad
          </DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">
            <FaWindows className="mr-2" /> Windows
          </DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">
            <RiMacbookLine />
            Mac
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
