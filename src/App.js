import React, { useState } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Content from './components/Content';
import InputItem from './components/InputItem';
import SearchItem from './components/SearchItem';

function App() {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem('todo') || [])
  );
  const [search, setSearch] = useState('');

  const setAndSaveItems = (items) => {
    setLists(items);
    localStorage.setItem('todo', JSON.stringify(items));
  };
  return (
    <main className="container mx-auto">
      <AppBar />
      <InputItem
        lists={lists}
        setLists={setLists}
        setAndSaveItems={setAndSaveItems}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        lists={lists.filter((item) =>
          item.text.toLowerCase().includes(search.toLowerCase())
        )}
        setLists={setLists}
        setAndSaveItems={setAndSaveItems}
      />
    </main>
  );
}

export default App;
