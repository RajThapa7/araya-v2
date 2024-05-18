"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { closeModal } from "@/lib/modal/modalSlice";
import { Dialog } from "@material-tailwind/react";

export function Modal() {
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    dispatch(closeModal());
  };

  const { isModalOpen, modalBody } = useAppSelector((state) => state.modal);

  return (
    <>
      <Dialog
        open={isModalOpen}
        size="lg"
        handler={handleOpen}
        className="px-6 py-10"
      >
        {modalBody}
      </Dialog>
    </>
  );
}
