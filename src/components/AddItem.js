import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ lists, setLists }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = lists.length ? lists[lists.length - 1].id + 1 : 1;
    const newItem = {
      id: id,
      checked: false,
      text: item,
    };
    setLists([...lists, newItem]);
    setItem('');
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        value={item}
        required
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add Item"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
