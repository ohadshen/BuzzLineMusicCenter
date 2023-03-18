import React from "react";
import { Dropdown } from "react-bootstrap";

interface FilterDropdownProps {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
}

export default function CustomDropdown({
  title,
  options,
  onSelect,
}: FilterDropdownProps) {
  return (
    <Dropdown
      onSelect={(eventKey, event) => {
        console.log(eventKey, event);
        onSelect(eventKey as string);
      }}
    >
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => {
          return <Dropdown.Item eventKey={option}>{option}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
