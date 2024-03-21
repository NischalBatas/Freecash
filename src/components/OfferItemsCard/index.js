import Image from "next/image";
import Link from "next/link";
import { IoPlay } from "react-icons/io5";
import { SiBitcoinsv } from "react-icons/si";

export default function OfferItemCard() {
  return (
    <div className="product_main_group3_sub2_item bg-anova4 w-28 md:w-32 p-3 flex flex-col rounded-lg">
      <Link href="/products">
        <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
          <Image
            className="rounded-lg"
            width={150}
            height={150}
            alt="image"
            src="/images/dots.jpg"
          />
          <div className="play-button-icon text-white ">
            <IoPlay />
          </div>
        </div>
      </Link>
      <div className="product_main_group3_innergroup2_item_content mt-3">
        <div className="product_main_group3_innergroup2_item_content_title font-semibold text-xs md:text-sm">
          <p>BitLabs1 Surveys</p>
        </div>
        <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
          <p>CryptoCurrency</p>
        </div>
        <div className="product_main_group3_innergroup2_item_content_price mt-2 text-xs md:text-sm">
          <span className="flex flex-nowrap items-center gap-1 font-semibold">
            <SiBitcoinsv className="w-4 h-4 text-yellow-400" />
            8,800
          </span>
        </div>
      </div>
    </div>
  );
}
