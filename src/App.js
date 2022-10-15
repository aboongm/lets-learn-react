import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';

function App() {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem('todolist')) || []
  );

  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header />
      <AddItem lists={lists} setLists={setLists} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        lists={lists.filter((item) =>
          item.text.toLowerCase().includes(search.toLowerCase())
        )}
        setLists={setLists}
      />
      <Footer />
    </div>
  );
}

export default App;
