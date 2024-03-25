import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import { SiBitcoinsv } from "react-icons/si";

export default function FeaturedOffersCardItem() {
  return (
    <div className="product_main_group2_item  flex flex-col gap-2 w-40 md:w-72 rounded-lg bg-anova4 pb-2">
      <div className="product_main_group3_innergroup2_item_image">
        <Image
          className=""
          width={350}
          height={100}
          alt="image"
          src="/images/brain.jpg"
        />
        <div className="play-button-icon text-white ">
          <IoPlay />
        </div>
      </div>
      <div className="product_main_group2_item_content flex flex-col md:flex-row md:justify-between md:items-center px-2  py-1">
        <div className="product_main_group2_item_content_group1">
          <div className="product_main_group2_item_content_group1_title font-semibold">
            <p>InNepal Tech</p>
          </div>
          <div className="product_main_group2_item_content_group1_category font-medium text-xs text-anovatext1">
            <p>Monlix</p>
          </div>
        </div>
        <div className="product_main_group2_item_content_group2 mt-2 md:mt-1">
          <span className="flex flex-nowrap items-center gap-1 font-semibold">
            <SiBitcoinsv className="w-4 h-4 text-yellow-400" />
            8800
          </span>
        </div>
      </div>
    </div>
  );
}
