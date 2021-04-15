import axios from 'axios';
const apiRequestUtil = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 20000,
});

export default apiRequestUtil;
