import { FaBars } from "react-icons/fa6";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="navbar_group1_subgroup_1 flex items-center gap-2">
      <FaBars className="text-white" />

      <Image
        className="navbar-logo"
        width={20}
        height={20}
        alt="logo"
        src="/images/logo.png"
      />
      <span className="ml-2 text-green-600 font-bold hidden md:block">
        FreeCash
      </span>
    </div>
  );
}
