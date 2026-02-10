import axios from "axios";

const baseURL = "https://services.flujolink.com/api/v1/";

const api = axios.create({
  baseURL: baseURL,
});

api.defaults.headers.common["Content-Type"] = "application/json";

export { api };
