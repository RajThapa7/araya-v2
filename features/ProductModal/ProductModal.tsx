import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { Modal } from "@/components/Modal/Modal";
import ProductShortDescription from "@/components/ProductShortDescription";
import { Dispatch, useEffect } from "react";

export default function ProductModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  const html =
    typeof document !== "undefined" && document.querySelector("html");

  useEffect(() => {
    if (!html) {
      return;
    }
    if (open) {
      setTimeout(() => {
        html.style.overflowY = "hidden";
      }, 500);
    }
    return () => {
      html.style.overflowY = "scroll";
    };
  }, [html, open]);

  return (
    <Modal {...{ open, setOpen }}>
      <div className="relative flex flex-col gap-16">
        <div className="flex flex-col justify-center gap-x-10 gap-y-10 md:flex-row">
          <div
            id="portal"
            className="absolute left-[520px] top-0 z-10 border-2 border-gray-300 bg-white object-cover"
          ></div>
          <div className="w-full md:w-[50%] lg:w-[40%]">
            <ImageSlider className="max-w-md" isMagnified={false} />
          </div>
          <ProductShortDescription className="w-full md:w-[50%] lg:w-[60%]" />
        </div>
      </div>
    </Modal>
  );
}
