import axios from "axios";
import { getStorageData, TOKEN } from "./localstorage";

// axios.defaults.baseURL = "https://uat.tvs.in/partsmart-node/api/v1/";
axios.defaults.baseURL = "https://uat.tvs.in/hypermart/api/v1/";
// axios.defaults.baseURL = "https://4eff9cee6e7548d9e18379baccb10159.serveo.net/api/v1/";
// axios.defaults.baseURL = "https://websprint.mytvspartsmart.in/hypermart/api/v1/";

// Request Interceptor
axios.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers, authentication tokens)
    const accessToken = getStorageData(TOKEN);
    console.log('-----Token', getStorageData(TOKEN));
    // config.headers["Access-Control-Allow-Origin"] = "*";
    // console.log("accessToken", accessToken);
    // ** If token is present add it to request's Authorization Header
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    config.headers["Content-Type"] = "application/json";
    console.log("Request URL: ########", axios.defaults.baseURL + config.url);
    console.log("Request Data: ########", config.data);
    return config;
  },
  (error) => {
    // Handle request errors here
    console.log("Error: ######## " + error);
    return Promise.reject(error);
  }
);

//Response Interceptor
axios.interceptors.response.use(
  (response) => {
    // Modify the response data here (e.g., parse, transform)
    console.log("resp " + response);
    return response.data;
  },
  (error) => {
    // Handle response errors here
    console.log("error log " + error);
    return Promise.reject(error);
  }
);
