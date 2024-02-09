import React from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
  return (
    <div className="search-filter">
      <input type="text" placeholder="Search" onChange={onSearch} />
      <select onChange={onFilter}>
        <option value="category">Category</option>
        {/* Add more filter options based on your requirements */}
      </select>
    </div>
  );
};

export default SearchFilter;
