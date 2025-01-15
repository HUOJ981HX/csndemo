"use client";

import DemographicForm from "@/components/DemographicForm";
import { Button } from "@/components/ui/button";
import React, { useState, SetStateAction } from "react";

function FilterPage() {
  const [gender, setGender] = useState<string[]>([]);
  const [ethnicity, setEthnicity] = useState<string[]>([]);
  const [religion, setReligion] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      gender,
      ethnicity,
      religion,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <DemographicForm
          setGender={setGender}
          setEthnicity={setEthnicity}
          setReligion={setReligion}
          gender={gender}
          ethnicity={ethnicity}
          religion={religion}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FilterPage;
