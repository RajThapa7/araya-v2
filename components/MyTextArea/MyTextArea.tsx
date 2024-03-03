"use client";
import { Textarea, TextareaProps } from "@material-tailwind/react";

export default function MyTextArea(props: TextareaProps) {
  const { ref, ...remProps } = props;
  return <Textarea {...remProps} color="blue" className="w-full" />;
}
