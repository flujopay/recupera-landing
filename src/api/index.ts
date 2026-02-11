import axios from "axios";

const baseURL = "https://services.flujolink.com/api/v1/";
const baseDEVMVURL = "https://dev.mv.flujolink.com/api/v1/";

const api = axios.create({
  baseURL: baseURL,
});

const apiDev = axios.create({
  baseURL: baseDEVMVURL,
});

api.defaults.headers.common["Content-Type"] = "application/json";
apiDev.defaults.headers.common["Content-Type"] = "application/json";

export { api, apiDev };
