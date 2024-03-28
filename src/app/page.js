import Chat from "@/components/Chat";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import LastTransactionItemHolder from "@/container/LastTransactionItemHolder";

export default function Home() {
  return (
    <div className="">


        <LastTransactionItemHolder />
        <Products />


    </div>
  );
}
