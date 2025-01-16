"use client";

import BaseDialog from "@/components/BaseDialog";
import Filter from "@/components/Filter";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gender, setGender] = useState<string[]>([]);
  const [ethnicity, setEthnicity] = useState<string[]>([]);
  const [religion, setReligion] = useState<string[]>([]);
  const [work, setWork] = useState<string[]>([]);
  const [relation, setRelation] = useState<string[]>([]);
  const [help, setHelp] = useState<string[]>([]);
  const [other, setOther] = useState<string[]>([]);
  const [openItems, setOpenItems] = useState<string[]>([]);

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
        <Filter gender={gender} setGender={setGender} ethnicity={ethnicity} setEthnicity={setEthnicity} religion={religion} setReligion={setReligion} work={work} setWork={setWork} relation={relation} setRelation={setRelation} help={help} setHelp={setHelp} other={other} setOther={setOther} openItems={openItems} setOpenItems={setOpenItems} />
      </BaseDialog>
    </>
  );
}
