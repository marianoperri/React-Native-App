import axios from 'axios';
import {BASE_URL} from '../Consts/consts';

export const searchMovie = async text => {
  const res = await axios.get(BASE_URL + text);
  //   console.log(res.data.Search);
  return res.data.Search;
};
