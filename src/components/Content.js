import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ lists, setAndSaveItems }) => {
  const handleCheck = (id) => {
    const newLists = lists.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(newLists);
  };

  const handleDelete = (id) => {
    const newItems = lists.filter((item) => item.id !== id);
    setAndSaveItems(newItems);
  };

  return (
    <section className="grid grid-cols-1 gap-4">
      <ul className="bg-white border m-2 rounded-lg align-center shadow-lg p-4">
        {lists.map((item) => (
          <li
            key={item.id}
            className="item bg-gray-300 my-2 p-2 rounded-lg shadow-lg d-flex align-center justify-content-between"
          >
            <input
              onChange={() => handleCheck(item.id)}
              type="checkbox"
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleCheck(item.id)}
              htmlFor="text"
            >
              {item.text}
            </label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Content;
