"use client";

import React, { useState, SetStateAction, Dispatch } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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

  const handleCheckboxChange = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const CheckboxGroup = ({
    title,
    options,
    selected,
    setSelected,
  }: {
    title: string;
    options: string[];
    selected: string[];
    setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  }) => (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${title}-${option}`}
              checked={selected.includes(option)}
              onCheckedChange={() =>
                handleCheckboxChange(option, selected, setSelected)
              }
            />
            <Label htmlFor={`${title}-${option}`}>{option}</Label>
          </div>
        ))}
      </div>
    </div>
  );

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
