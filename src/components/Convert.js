import React, { useEffect, useState } from 'react';
import GoogleTranslate from '../apis/GoogleTranslate';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await GoogleTranslate.post(null, null, {
        params: { q: debouncedText, target: language.value },
      });

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div className="convert">
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
