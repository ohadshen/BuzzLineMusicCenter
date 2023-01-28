// const companyDropdown = (
//   <Dropdown>
//     <Dropdown.Toggle variant="success" id="dropdown-basic">
//       Dropdown Button
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
// );

import React from "react";
import { Dropdown } from "react-bootstrap";

interface FilterDropdownProps {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
}

export default function FilterDropdown({
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
      <Dropdown.Toggle variant="success" id="dropdown-basic">
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
