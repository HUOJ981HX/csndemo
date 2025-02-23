"use client";

import React, { useState, SetStateAction, Dispatch, ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

function BaseDialog({
  children,
  isModalOpen,
  setIsModalOpen,
}: {
  children: ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // return <>{children}</>;
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default BaseDialog;
