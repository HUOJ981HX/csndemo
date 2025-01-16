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
  openItems,
}: {
  setWork: Dispatch<SetStateAction<string[]>>;
  handleSwitchChange: Function;
  setRelation: Dispatch<SetStateAction<string[]>>;
  relation: string[];
  setHelp: Dispatch<SetStateAction<string[]>>;
  help: string[];
  setOther: Dispatch<SetStateAction<string[]>>;
  other: string[];
  openItems: string[];
}) => {

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
            checked={openItems.includes("work")}
          />
          <Label htmlFor="work">Paid work/job</Label>
          <AccordionContent>
            <RadioGroup
              defaultValue="Seeking"
              onValueChange={(value) => {
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
            checked={openItems.includes("relation")}
          />
          <Label htmlFor="relation">Relation</Label>
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
            checked={openItems.includes("help")}
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
            checked={openItems.includes("other")}
          />
          <Label htmlFor="other">Other</Label>
        </div>
      </CardContent>
    </>
  );
};

export default PurposeForm;
