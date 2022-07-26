import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div className="translate">
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter Text</label>
          <input
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
