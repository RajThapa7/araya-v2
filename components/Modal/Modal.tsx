"use client";
import { Dialog } from "@material-tailwind/react";
import React, { Dispatch, ReactNode } from "react";

export function Modal({
  children,
  open,
  setOpen,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} size="lg" handler={handleOpen} className="px-6 py-10">
        {children}
      </Dialog>
    </>
  );
}
