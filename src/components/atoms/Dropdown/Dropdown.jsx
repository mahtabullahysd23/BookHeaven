import React, { useState } from 'react';
import './Dropdown.style.scss'


const Dropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className={`dropdown-toggle ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        {selectedOption}
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
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

export default Dropdown;
