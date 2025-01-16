import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import React, { useState, useEffect, SetStateAction, Dispatch } from "react";

export const ControlledSwitch = ({
  programmaticToggle,
  setOpenItems,
  openItems,
}: {
  programmaticToggle: boolean;
  setOpenItems: Dispatch<SetStateAction<string[]>>;
  openItems: string[]
}) => {
  const [isChecked, setIsChecked] = useState(!!openItems.length);

  // Effect to handle external toggle
  useEffect(() => {
      setIsChecked(programmaticToggle);
  }, [programmaticToggle]);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="all" checked={isChecked} onCheckedChange={(isChecked) => {
        setIsChecked(isChecked);
        setOpenItems([]);
        }} />
      <Label htmlFor="all">Use filter</Label>
    </div>
  );
};
