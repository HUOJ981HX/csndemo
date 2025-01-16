"use client";

import React, { useState, SetStateAction, Dispatch } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CheckboxGroup from "./formInputs/CheckboxGroup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const PurposeForm = ({
  setWorkPurpose,
  handleSwitchChange,
}: {
  setWorkPurpose: Dispatch<SetStateAction<string[]>>;
  handleSwitchChange: Function;
}) => {
  const genderOptions = ["Male", "Female", "Non-binary"];
  const ethnicityOptions = [
    "White/Caucasians",
    "Black/African",
    "Middle Eastern",
    "South Asian",
    "Southeast Asians",
    "East Asians",
    "Native American/Indigenous",
    "Pacific Islander",
    "Mixed",
  ];
  const religionOptions = [
    "Catholic",
    "Protestant",
    "Orthodox",
    "Muslim",
    "Buddhist",
    "Hindu",
    "Atheist",
    "Jewish",
    "Other",
  ];

  return (
    <>
      <CardHeader>
        <CardTitle>Purpose</CardTitle>
      </CardHeader>
      <CardContent>
        <AccordionItem value="work">
          <Switch
            id="work"
            onCheckedChange={(isChecked) =>
              handleSwitchChange("work", isChecked)
            }
          />
          <Label htmlFor="work">Paid work/job</Label>
          <AccordionContent>
            <RadioGroup
              defaultValue="comfortable"
              onValueChange={(value) => {
                setWorkPurpose([value]);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="Seeking" />
                <Label htmlFor="Seeking">Seeking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="Offering" />
                <Label htmlFor="Offering">Offering</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </CardContent>
    </>
  );
};

export default PurposeForm;
