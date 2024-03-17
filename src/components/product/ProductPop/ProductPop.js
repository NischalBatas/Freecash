import React from "react";
import { IoPlay } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../product.css";
import ProductPopDetail from "./ProductPopDetail/ProductPopDetail";
import ProductTypes from "./ProductPopDetail/ProductTypes";

const ProductPop = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IoPlay />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlays" />
        <Dialog.Content className="DialogContents">
          <ProductPopDetail />
          <ProductTypes />

          <div className="rounded-xl bg-anova2 px-3 py-2 my-8">
            <span className="text-white">About</span>
            <p className="mt-2 text-sm">Complete a survey, Can be completed multiple times per day</p>
          </div>

          <div className="my-4 h-60">
            <span className="text-white">Steps</span>
            <ul className="steps-main mt-2 text-sm px-4">
              <li>Complete a survey</li>
              <li>Can be completed multiple times per day</li>
              <li>Wager your entire deposit x2</li>
            </ul>
          </div>

          <div  style={{ display: 'grid'}}>
            <Dialog.Close asChild>
              <button className="Buttons green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButtons" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductPop;