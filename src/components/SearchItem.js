import React from 'react';

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="addForm">
      <label htmlFor="search">search</label>
      <input
        id="search"
        type="text"
        required
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
