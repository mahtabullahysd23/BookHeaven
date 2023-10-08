import React, { useState } from 'react';
import './Search.style.scss';
import {SlMagnifier} from 'react-icons/sl'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-icon">
      <SlMagnifier/>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
