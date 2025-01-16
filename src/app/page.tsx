"use client";

import BaseDialog from "@/components/BaseDialog";
import Filter from "@/components/Filter";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="flex">
          <Button onClick={() => {
            setIsModalOpen(true);
          }}>Filter</Button> <Button>About</Button>
        </div>
      </div>
      <BaseDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Filter />
      </BaseDialog>
    </>
  );
}
