import axios from "axios";

const baseURL = import.meta.env.REACT_APP_API_URL;
const token = import.meta.env.REACT_APP_API_TOKEN;

export const makeRequest = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "bearer " + token,
  },
});
