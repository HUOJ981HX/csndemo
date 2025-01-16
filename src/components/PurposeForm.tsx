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

const relationOptions = ["Shorterm", "Longterm", "Casual"];

const PurposeForm = ({
  setWork,
  handleSwitchChange,
  relation,
  setRelation,
  setHelp,
  help,
  other,
  setOther,
}: {
  setWork: Dispatch<SetStateAction<string[]>>;
  handleSwitchChange: Function;
  setRelation: Dispatch<SetStateAction<string[]>>;
  relation: string[];
  setHelp: Dispatch<SetStateAction<string[]>>;
  help: string[];
  setOther: Dispatch<SetStateAction<string[]>>;
  other: string[];
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
                console.log("sssssssssssssssssssssssss");
                console.log("sean_log value: " + value);
                setWork([value]);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Seeking" id="Seeking" />
                <Label htmlFor="Seeking">Seeking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Offering" id="Offering" />
                <Label htmlFor="Offering">Offering</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="relation">
          <Switch
            id="relation"
            onCheckedChange={(isChecked) =>
              handleSwitchChange("relation", isChecked)
            }
          />
          <Label htmlFor="gender">Relation</Label>
          <AccordionContent>
            <CheckboxGroup
              title="relation"
              options={relationOptions}
              selected={relation}
              setSelected={setRelation}
            />
          </AccordionContent>
        </AccordionItem>

        <div>
          <Switch
            id="help"
            onCheckedChange={(isChecked) => {
              handleSwitchChange("help", isChecked);
              setHelp(["help"]);
            }}
          />
          <Label htmlFor="help">Help</Label>
        </div>

        <div>
          <Switch
            id="other"
            onCheckedChange={(isChecked) => {
              handleSwitchChange("other", isChecked);
              setOther(["other"]);
            }}
          />
          <Label htmlFor="other">Other</Label>
        </div>
      </CardContent>
    </>
  );
};

export default PurposeForm;
