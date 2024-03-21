import Chat from "@/components/Chat";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import LastTransactionItemHolder from "@/container/LastTransactionItemHolder";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-10 text-white">
      <div className="col-span-1 hidden lg:block">
        <Sidebar />
      </div>

      <div className="col-span-4 lg:col-span-2 px-4 py-2 lg:p-0 ">
        <LastTransactionItemHolder />
        <Products />
      </div>

      <div className="col-span-1 hidden lg:grid justify-items-end">
        <Chat />
      </div>
    </div>
  );
}
