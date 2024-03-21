import LastTransactionItem from "@/components/LastTransactionsItem";
import { GoDotFill } from "react-icons/go";

export default function LastTransactionItemHolder() {
  return (
    <div className="product_main_group1 mb-2 overflow-hidden flex justify-start gap-2">
      <div className="product_main_group1_sub1 px-3 bg-anovanavbar flex justify-center items-center rounded">
        <span className=" ">
          <GoDotFill className="text-green-500" />
        </span>
      </div>

      <div className="product_main_group1_sub2 flex gap-2 owl-carousel owl-theme">
        <LastTransactionItem />
      </div>
    </div>
  );
}
