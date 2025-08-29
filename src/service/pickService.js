import axios from "axios";
//role list
export const getPickItem = (data) => {
  return axios({
    method: "POST",
    url: `store/getItemInfo`,
    data: data,
  });
};