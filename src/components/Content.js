import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      checked: true,
      text: 'Learn JavaScript',
    },
    {
      id: 2,
      checked: false,
      text: 'Learn React',
    },
    {
      id: 3,
      checked: false,
      text: 'Learn Ruby',
    },
    {
      id: 4,
      checked: false,
      text: 'Learn Ruby On Rails',
    },
  ]);

  const handleCheck = (id) => {
    const newLists = lists.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLists(newLists);
  };

  const handleDelete = (id) => {
    const newLists = lists.filter((item) => item.id !== id);
    setLists(newLists);
  };

  return (
    <main>
      <ul className="list__items">
        {lists.map((item) => (
          <li key={item.id} className="item">
            <input
              onChange={() => handleCheck(item.id)}
              type="checkbox"
              checked={item.checked}
            />
            <label
              onDoubleClick={() => handleCheck(item.id)}
              htmlFor="text"
              style={item.checked ? { textDecoration: 'line-through' } : null}
            >
              {item.text}
            </label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
