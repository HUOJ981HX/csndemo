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

const DemographicForm = ({
  gender,
  ethnicity,
  religion,
  setGender,
  setEthnicity,
  setReligion,
  handleSwitchChange,
}: {
  gender: string[];
  ethnicity: string[];
  religion: string[];
  setGender: Dispatch<SetStateAction<string[]>>;
  setEthnicity: Dispatch<SetStateAction<string[]>>;
  setReligion: Dispatch<SetStateAction<string[]>>;
  handleSwitchChange: Function;
}) => {
  // const [gender, setGender] = useState<string[]>([]);
  // const [ethnicity, setEthnicity] = useState<string[]>([]);
  // const [religion, setReligion] = useState<string[]>([]);

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
        <CardTitle>Basic</CardTitle>
      </CardHeader>
      <CardContent>
        <AccordionItem value="gender">
          <Switch
            id="gender"
            onCheckedChange={(isChecked) =>
              handleSwitchChange("gender", isChecked)
            }
          />
          <Label htmlFor="gender">Gender</Label>
          <AccordionContent>
            <CheckboxGroup
              title="Gender"
              options={genderOptions}
              selected={gender}
              setSelected={setGender}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ethnicity">
          <Switch
            id="ethnicity"
            onCheckedChange={(isChecked) =>
              handleSwitchChange("ethnicity", isChecked)
            }
          />
          <Label htmlFor="ethnicity">Ethnicity</Label>
          <AccordionContent>
            <CheckboxGroup
              title="Ethnicity"
              options={ethnicityOptions}
              selected={ethnicity}
              setSelected={setEthnicity}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="religion">
          <Switch
            id="religion"
            onCheckedChange={(isChecked) =>
              handleSwitchChange("religion", isChecked)
            }
          />
          <Label htmlFor="religion">Religion</Label>
          <AccordionContent>
            <CheckboxGroup
              title="Religion"
              options={religionOptions}
              selected={religion}
              setSelected={setReligion}
            />
          </AccordionContent>
        </AccordionItem>
      </CardContent>
    </>
  );
};

export default DemographicForm;
