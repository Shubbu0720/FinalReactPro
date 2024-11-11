// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1000', // or your backend server URL
});

export default instance;
