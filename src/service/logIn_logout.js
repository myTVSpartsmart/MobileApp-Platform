import axios from "axios";

export const login = (data) => {
    return axios({
      method: "POST",
      url: `store/login`,
      data: data,
    });
  };
  
  export const logout = (data) => {
    return axios({
      method: "POST",
      url: `store/logout`,
      data: data,
    });
  };
  