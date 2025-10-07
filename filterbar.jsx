import React from 'react';

const FilterBar = ({ onCategoryChange, onSortChange }) => (
  <div className="filter-bar">
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="All">All Categories</option>
      <option value="Category A">Category A</option>
      <option value="Category B">Category B</option>
      <option value="Category C">Category C</option>
    </select>

    <select onChange={(e) => onSortChange(e.target.value)}>
      <option value="">Sort By</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="ratingHigh">Rating: High to Low</option>
    </select>
  </div>
);

export default FilterBar;
