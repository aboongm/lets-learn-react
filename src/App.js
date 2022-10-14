import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import AddItem from './components/AddItem';

function App() {
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
    <div className="App">
      <Header />
      <AddItem lists={lists} setLists={setLists} />
      <Content lists={lists} setLists={setLists} />
      <Footer />
    </div>
  );
}

export default App;
