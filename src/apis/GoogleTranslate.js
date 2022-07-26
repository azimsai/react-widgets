import axios from 'axios';

const KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_KEY;

export default axios.create({
  baseURL: 'https://translation.googleapis.com/language/translate/v2',
  params: {
    key: KEY,
  },
});
