import axios from "axios";

const HOST = "localhost";
const PORT = "8080";
const PARAMETRO = "families";

const api = axios.create({
  baseURL: `http://${HOST}:${PORT}/${PARAMETRO}?`
  // baseURL: 'http://localhost:3333/'
});

export default api;

/*
  http://localhost:8080/families*
  http://localhost:8080/families?skip=0&take=10
  http://localhost:8080/families?skip=10&take=10
  https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/ID DA FAMÍLIA.jpg
  https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/abc-123.jpg
*/
