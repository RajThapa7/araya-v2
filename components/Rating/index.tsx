"use client";
import { Rating } from "@material-tailwind/react";

interface IRatingProps {
  readonly?: boolean;
  value: number;
}

export function MyRating({ value, readonly = true }: IRatingProps) {
  return <Rating readonly={readonly} value={value} />;
}
