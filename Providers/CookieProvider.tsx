"use client";
import { PropsWithChildren } from "react";
import { CookiesProvider } from "react-cookie";

const CookieProvider = ({ children }: PropsWithChildren) => {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      {children}
    </CookiesProvider>
  );
};

export default CookieProvider;
