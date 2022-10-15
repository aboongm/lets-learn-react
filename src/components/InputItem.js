import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const InputItem = ({ lists, setAndSaveItems }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = lists.length ? lists[lists.length - 1].id + 1 : 1;
    const tempItem = {
      id: id,
      checked: false,
      text: newItem,
    };
    setAndSaveItems([...lists, tempItem]);
    setNewItem('');
  };
  return (
    <section className="grid grid-cols-1 gap-4">
      <div className="bg-white border m-2 rounded-lg align-center shadow-lg p-4">
        <form className="addForm border " onSubmit={handleSubmit}>
          <input
            autoFocus
            id="addItem"
            type="text"
            placeholder="Add new item"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    </section>
  );
};

export default InputItem;
