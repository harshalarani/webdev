import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">Search</button>
    </form>
    </div>
  );
};

export default SearchBar;
