import React from 'react'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import { FaThList } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { BsFillFilterSquareFill } from 'react-icons/bs'
import { BsFillGridFill } from 'react-icons/bs' 
import './FilterHeaderOrganism.style.scss'  
import { useState } from 'react'
const FilterHeaderOrganism = () => {
  const [selectedOption, setSelectedOption] = useState('Default sorting');
  const onSelect = (option) => {
    setSelectedOption(option);
  }
  return (
    <div className="filter-header">
        <div className="filter-header-left">
                <BsFillFilterSquareFill/>
                <p>Filters</p>   
        </div>
        <div className="filter-header-right">
            <Dropdown options={['Option 1', 'Option 2', 'Option 3']} selectedOption={selectedOption} onSelect={onSelect}/>
            <FaThList/>
            <BsFillGridFill/>
            <BsFillGrid3X3GapFill/>
        </div>
    </div>
  )
}

export default FilterHeaderOrganism