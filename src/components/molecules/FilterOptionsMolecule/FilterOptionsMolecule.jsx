import React from 'react'
import './FilterOptionsMolecule.style.scss'
import Checkbox from '../../atoms/Checkbox/Checkbox'

const FilterOptionsMolecule = ({title,options,checked}) => {
  return (
    <div className="filter-block">
        <p>{title}</p>
        {options.map((option) => (
        <Checkbox key={option} text={option} checked={checked} />
      ))}
      </div>
  )
}

export default FilterOptionsMolecule