import React from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Search from "../../atoms/Search/Search";
import RangeSlider from "../../atoms/RangeSlider/RangeSlider";
import "./FilterOptionOrganism.style.scss";
import FilterOptionsMolecule from "../../molecules/FilterOptionsMolecule/FilterOptionsMolecule";

const FilterOptionOrganism = () => {
  const minRangeValue = 200;
  const maxRangeValue = 8000;
  const step = 10;
  const handleRangeChange = (newRange) => {
    console.log(newRange);
  };
  return (
    <div className="filter-option">
      <Search />
      <div className="price-range">
        <p>Price range</p>
        <RangeSlider
          max={maxRangeValue}
          min={minRangeValue}
          step={step}
          onChange={handleRangeChange}
        />
      </div>
      <FilterOptionsMolecule
        title="Availability"
        options={["In Stock", "Out of Stock", "Upcoming"]}
        checked="false"
      />
      <FilterOptionsMolecule
        title="Genre"
        options={["Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy"]}
        checked="false"
      />

        <FilterOptionsMolecule
        title="Language"
        options={["English", "Hindi", "Tamil", "Telugu"]}
        checked="false"
        />

        <FilterOptionsMolecule
        title="Tag"
        options={["Featured", "New", "Hot", "Trending" ]}
        checked="false"
        />
    </div>
  );
};

export default FilterOptionOrganism;
