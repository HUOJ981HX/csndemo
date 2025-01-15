"use client";

import React, { useState, SetStateAction, Dispatch } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CheckboxGroup from "./formInputs/CheckboxGroup";


const DemographicForm = ({
  gender,
  ethnicity,
  religion,
  setGender,
  setEthnicity,
  setReligion,
}: {
  gender: string[];
  ethnicity: string[];
  religion: string[];
  setGender: Dispatch<SetStateAction<string[]>>;
  setEthnicity: Dispatch<SetStateAction<string[]>>;
  setReligion: Dispatch<SetStateAction<string[]>>;
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
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Demographic Information</CardTitle>
      </CardHeader>
      <CardContent>
        <CheckboxGroup
          title="Gender"
          options={genderOptions}
          selected={gender}
          setSelected={setGender}
        />

        <CheckboxGroup
          title="Ethnicity"
          options={ethnicityOptions}
          selected={ethnicity}
          setSelected={setEthnicity}
        />

        <CheckboxGroup
          title="Religion"
          options={religionOptions}
          selected={religion}
          setSelected={setReligion}
        />
      </CardContent>
    </Card>
  );
};

export default DemographicForm;
