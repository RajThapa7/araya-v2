import Image from "next/image";
import { PiCaretCircleRightFill } from "react-icons/pi";

export default function FlashCard() {
  return (
    <div className="transition-smooth flex h-fit w-full cursor-pointer flex-row gap-2 bg-gray-100 shadow-sm hover:shadow-lg">
      <div className="relative w-1/2">
        <Image
          src={
            "https://transvelo.github.io/electro-html/2.0/assets/img/246X176/img1.jpg"
          }
          alt="product image"
          fill
          sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
          className="object-contain"
        />
      </div>
      <div className="flex w-1/2 flex-col justify-center gap-3 py-4 pr-3">
        <p className="break-words text-lg text-gray-700">
          CATCH BIG <b>DEALS</b> ON THE CAMERAS
        </p>
        <div className="flex flex-row items-center gap-1">
          <p className="font-bold text-gray-800">Shop Now</p>
          <PiCaretCircleRightFill className="text-xl text-orange-300" />
        </div>
      </div>
    </div>
  );
}
