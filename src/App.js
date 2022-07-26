import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
      <h1>Widgets App</h1>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}

      <Translate />
    </div>
  );
}

export default App;
