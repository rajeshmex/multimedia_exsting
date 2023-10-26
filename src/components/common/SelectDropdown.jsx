import React from "react";
import Select from "react-select";

function SelectDropdown({ id, name, value, options, onChange }) {
  return (
    <Select
      id={id}
      name={name}
      value={options.find((i) => i.value === value)}
      options={options}
      onChange={(selectedOption) => {
        onChange(selectedOption.value);
      }}
    />
  );
}

export default SelectDropdown;
