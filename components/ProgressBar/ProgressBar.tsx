"use client";
import { Progress, type ProgressProps } from "@material-tailwind/react";

export default function ProgressBar(props: ProgressProps) {
  const { ref, ...remProps } = props;
  return <Progress {...remProps} />;
}
