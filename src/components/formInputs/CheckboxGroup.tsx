import React from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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

export default CheckboxGroup