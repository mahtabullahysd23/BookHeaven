import React from "react";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import { FaThList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import "./FilterHeaderOrganism.style.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFilter } from "../../../Store/Slices/filterSlice";
const FilterHeaderOrganism = () => {
  const [selectedOption, setSelectedOption] = useState("Default sorting");
  const filterString = useSelector((state) => state.filter.filterString);
  const dispatch = useDispatch();

  const onSelect = (option) => {
    setSelectedOption(option.option);
    if (filterString.includes("SortBy=")) {
      const appliedFilter = filterString.replace(
        /SortBy=\w+/g,
        `SortBy=${option.sort}`
      );
      dispatch(addFilter(appliedFilter));
    }
    if (filterString.includes("SortByType=")) {
      const appliedFilter = filterString.replace(
        /SortByType=\w+/g,
        `SortByType=${option.order}`
      );
      dispatch(addFilter(appliedFilter));
    } else {
      const appliedFilter =
        filterString + `SortBy=${option.sort}&SortByType=${option.order}&`;
      dispatch(addFilter(appliedFilter));
    }
  };
  return (
    <div className="filter-header">
      <div className="filter-header-left">
        <BsFillFilterSquareFill />
        <p>Filters</p>
      </div>
      <div className="filter-header-right">
        <Dropdown
          options={[
            "Price (Low > High)",
            "Price (High > Low)"
          ]}
          selectedOption={selectedOption}
          onSelect={onSelect}
        />
        <FaThList />
        <BsFillGridFill />
        <BsFillGrid3X3GapFill />
      </div>
    </div>
  );
};

export default FilterHeaderOrganism;
