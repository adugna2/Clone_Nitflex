import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // Replace this with the actual base URL of your API
});

export default instance;