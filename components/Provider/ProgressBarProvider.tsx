"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { PropsWithChildren } from "react";

const ProgressBarProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="green"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;
