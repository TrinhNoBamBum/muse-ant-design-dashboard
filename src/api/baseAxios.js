import axios from 'axios';

const baseAxios = axios.create({
  baseURL: `http://123.31.24.17:8080/api/`, // Replace with your actual base URL
  headers: {
    'Content-Type': 'application/json',
    // You can add any default headers here
  },
});

export default baseAxios;