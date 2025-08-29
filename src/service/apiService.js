import axios from "axios";
//role list
export const getItem = (data) => {
  return axios({
    method: "POST",
    url: `store/getItemInfo`,
    data: data,
  });
};

export const getLocatorInfo = (data) => {
  return axios({
    method: "POST",
    url: `/store/getLocatorInfo`,
    data: data,
  });
};

export const getSubmitInfo = (data) => {
  return axios({
    method: "POST",
    url: `store/generateGRN`,
    data: data,
  });
};

export const getTransferSubmit = (data) => {
  return axios({
    method: "POST",
    url: `/store/transferToLocator`,
    data: data,
  });
};

export const getNearByStore = (data) => {
  return axios({
    method: "POST",
    url: `/store/getNearByStore`,
    data: data,
  });
};

export const getFocuzApi = (data) => {
  return axios({
    method: "POST",
    url: `/store/getFocuzStockDetails`,
    data: data,
  });
};

export const getWareHouseCount = (data) => {
  return axios({
    method: "POST",
    url: `/store/getWarehouseCount`,
    // data: data,
  });
};

export const getStockDetails = (data) => {
  return axios({
    method: "POST",
    url: `/store/getStockDetails`,
    data: data,
  });
};

export const getHistoryDetails = (data) => {
  return axios({
    method: "POST",
    url: `/store/checkInSummary`,
    data: data,
  });
};

export const getCheckInDetails = (data) => {
  return axios({
    method: "POST",
    url: `/store/checkInDetails`,
    data: data,
  });
};

export const getPicksubmit = (data) => {
  return axios({
    method: "POST",
    url: `/store/generateCheckIn`,
    data: data,
  });
};

export const getReceiveInvoice = (data) => {
  return axios({
    method: "POST",
    url: `store/getTransferOrderInvoiceDetails`,
    data: data,
  });
};

export const getItemDetail = (data) => {
  return axios({
    method: "POST",
    url: `store/getItemDetail`,
    data: data,
  });
};
export const getSupplierSearch = (data) => {
  return axios({
    method: "POST",
    url: `store/supplierSearch`,
    data: data,
  });
};
export const getAlert = (data) => {
  return axios({
    method: "POST",
    url: `store/appAlert`,
    data: data,
  });
};