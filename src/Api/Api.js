import axios from 'axios';
import {BASE_URL} from '../Consts/consts';

export const searchMovie = async text => {
  const res = await axios.get(BASE_URL + text);
  return res.data.Search;
};
