import { Checkbox } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/alert";
import { InputHTMLAttributes } from "react";

type CheckboxProps = {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: key extends "color"
    ? color
    : InputHTMLAttributes<HTMLInputElement>[key];
} & { className?: string };

export default function MyCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      crossOrigin={undefined}
      className="h-4 w-4 rounded-sm"
      {...props}
    />
  );
}
