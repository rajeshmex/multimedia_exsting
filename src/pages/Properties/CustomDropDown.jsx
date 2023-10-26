import React, { useState } from "react";

const CustomDropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
    const [value, setvalue] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <div className="custom-dropdown">
      <input
        type="text"
        value={selectedOption}
        placeholder="Select an option"
        onClick={toggleDropdown}
        onChange={(e) => onSelect(e.target.value)} // Add onChange to handle user input
      />
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
