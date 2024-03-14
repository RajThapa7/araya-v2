"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export function BadgeIcon() {
  return (
    <div className="relative group">
      <ShoppingCartIcon
        width={25}
        height={30}
        className="text-gray-500 transition-smooth group-hover:text-accent"
      />
      <div className="absolute bg-accent -top-2 -right-3 w-6 h-6 rounded-full flex items-center justify-center">
        <p className="text-xs font-semibold text-white">99</p>
      </div>
    </div>
  );
}
