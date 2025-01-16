"use client";

import DemographicForm from "@/components/DemographicForm";
import { Button } from "@/components/ui/button";
import React, { useState, SetStateAction } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { filter } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PurposeForm from "@/components/PurposeForm";

function getEmptyFields(fields: filter): string {
  return Object.entries(fields)
    .filter(([_, value]) => value.length === 0)
    .map(([key]) => key)
    .join(", ");
}

function FilterPage() {
  const [gender, setGender] = useState<string[]>([]);
  const [ethnicity, setEthnicity] = useState<string[]>([]);
  const [religion, setReligion] = useState<string[]>([]);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [workPurpose, setWorkPurpose] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const basicFields = {
      gender,
      ethnicity,
      religion,
    };

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
      setOpenItems(openItems.filter((item) => item !== name));
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
            />

            <PurposeForm
              setWorkPurpose={setWorkPurpose}
              handleSwitchChange={handleSwitchChange}
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

export default FilterPage;
