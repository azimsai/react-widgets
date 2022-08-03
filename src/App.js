import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'React',
    content: 'A JavaScript library for building user interfaces.',
  },
  {
    title: 'Angular',
    content: "Anjular is The modern webdeveloper's platform.",
  },
  {
    title: 'Vue',
    content:
      'The Progressive JavaScript Framework.Approachable,Performant,Versatile',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Green',
    value: 'green',
  },
  {
    label: 'The color Blue',
    value: 'blue',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
