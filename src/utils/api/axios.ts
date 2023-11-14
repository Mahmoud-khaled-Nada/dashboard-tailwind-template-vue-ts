import axios, {AxiosRequestConfig} from 'axios';

const API_URL = import.meta.env.VITE_JSON_API;

export const api = axios.create({ baseURL: API_URL });
export const config: AxiosRequestConfig = { withCredentials: true };