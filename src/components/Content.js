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
  return (
    <main>
      <ul className="list__items">
        {lists.map((item) => (
          <li key={item.id} className="item">
            <input type="checkbox" checked={item.checked} />
            <label htmlFor="text">{item.text}</label>
            <FaTrashAlt />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
