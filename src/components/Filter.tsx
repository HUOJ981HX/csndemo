"use client";

import DemographicForm from "@/components/DemographicForm";
import { Button } from "@/components/ui/button";
import React, { useState, SetStateAction } from "react";
import { Accordion } from "@/components/ui/accordion";
import { filterFields } from "@/lib/types";
import { Card } from "@/components/ui/card";
import PurposeForm from "@/components/PurposeForm";

function getEmptyFields(fields: filterFields): string {
  return Object.entries(fields)
    .filter(([_, value]) => value.length === 0)
    .map(([key]) => key)
    .join(", ");
}

function Filter({
  gender,
  setGender,
  ethnicity,
  setEthnicity,
  religion,
  setReligion,
  work,
  setWork,
  relation,
  setRelation,
  help,
  setHelp,
  other,
  setOther,
  openItems,
  setOpenItems,
  minAge,
  setMinAge,
  maxAge,
  setMaxAge,
}: any) {
  // const [gender, setGender] = useState<string[]>([]);
  // const [ethnicity, setEthnicity] = useState<string[]>([]);
  // const [religion, setReligion] = useState<string[]>([]);
  // const [openItems, setOpenItems] = useState<string[]>([]);
  // const [work, setWork] = useState<string[]>([]);
  // const [relation, setRelation] = useState<string[]>([]);
  // const [help, setHelp] = useState<string[]>([]);
  // const [other, setOther] = useState<string[]>([]);

  console.log("fffffffffffffffffffffff");
  console.log("fffffffffffffffffffffff");
  console.log("sean_log work: " + JSON.stringify(work));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const basicFields = {
      gender,
      ethnicity,
      religion,
      work,
      relation,
      help,
      other,
      age: [minAge, maxAge]
    };

    console.log("bbbbbbbbbbbbbbbbbb");
    console.log("sean_log basicFields: " + JSON.stringify(basicFields));

    const filteredFields = Object.fromEntries(
      Object.entries(basicFields).filter(([key]) => openItems.includes(key))
    );

    console.log("sean_log filteredFields: " + JSON.stringify(filteredFields));

    const emptyFields = getEmptyFields(filteredFields);

    if (emptyFields) {
      window.alert("Please make sure to checkbox a value in " + emptyFields);
      return;
    }

    console.log("vvvvvvvvvvvvvvvvvvv");
    return {
      basic: filteredFields,
    };
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    console.log(name + " " + checked);
    // Need to add to the row of opened accordion here.
    // if `isChecked`, and not include, then add.

    if (checked && !openItems.includes(name)) {
      setOpenItems([...openItems, name]);
    } else {
      setOpenItems(openItems.filter((item: string) => item !== name));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <Card className="w-full max-w-4xl mx-auto">
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="w-full"
          >
            <DemographicForm
              setGender={setGender}
              setEthnicity={setEthnicity}
              setReligion={setReligion}
              gender={gender}
              ethnicity={ethnicity}
              religion={religion}
              handleSwitchChange={handleSwitchChange}
              openItems={openItems}
              minAge={minAge}
              setMinAge={setMinAge}
              maxAge={maxAge}
              setMaxAge={setMaxAge}
            />

            <PurposeForm
              setWork={setWork}
              relation={relation}
              setRelation={setRelation}
              setHelp={setHelp}
              help={help}
              other={other}
              setOther={setOther}
              handleSwitchChange={handleSwitchChange}
              openItems={openItems}
            />
          </Accordion>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </Card>
      </form>
    </div>
  );
}

export default Filter;
