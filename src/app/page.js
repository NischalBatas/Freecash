import Chat from "@/components/Chat";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-4  text-white">
   <div className="col-span-1 z-40 lg:block">
   <Sidebar />
   </div>
   
   <div className="col-span-4 ml-10 lg:ml-0 lg:col-span-3  xl:col-span-2 px-2 ">
   <Products/>
   </div>

    <div className="col-span-1 hidden xl:grid justify-items-end">
    <Chat/>
    </div>
    
    </div>
  );
}
