import axios from 'axios';

export default (url = 'https://pokeapi.co/api/v2/') => {
  const axiosObj = axios.create({
    baseURL: url,
  });

  return axiosObj;
};
