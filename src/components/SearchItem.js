import React from 'react';

const SearchItem = ({ search, setSearch }) => {
  return (
    <section className="grid grid-cols-1 gap-4">
      <div className="bg-white border m-2 rounded-lg align-center shadow-lg p-4">
        <form className="addForm border " onSubmit={(e) => e.preventDefault()}>
          <input
            autoFocus
            id="addItem"
            type="text"
            placeholder="Add new item"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchItem;
