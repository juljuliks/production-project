import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from '../const/localStorage';

const SERVICE_URL = process.env.REACT_APP_SERVICE_URL;

export const $api = axios.create({
  baseURL: SERVICE_URL,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
  },
});
