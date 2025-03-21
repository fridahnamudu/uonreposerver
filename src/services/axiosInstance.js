const axios = require('axios');

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://script.google.com/macros/s/AKfycbyJhvlR2mlEbPlHAh-d-RH0E3II_K0kbZp-b-vOLZ4dpAlN-axtBOoXY21fx76NEeU/exec',
  timeout: 10000,
});

module.exports = { axiosInstance };