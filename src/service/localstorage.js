import AsyncStorage from "@react-native-async-storage/async-storage";

export const IS_LOGGED = "is_Logged";
export const STAFF_CODE = "staff_code";
export const STAFF_NAME = "staff_name";
export const BRANCH_NAME = "branch_name";
export const TOKEN = "token";

export const storeData = async (key, value) => {
  try {
    // Convert value to string
    await AsyncStorage.setItem(key, value);
    console.log("Data stored succesfully ", key + "-" + value);
  } catch (e) {
    console.log("Error Storing Data in Async");
  }
};

export const getStorageData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log("Data retrieved succesfullsy ", value);
    return value;
  } catch (e) {
    // error dd value
  }
};

export const clearStorage = async () => {
  AsyncStorage.clear();
  console.log(AsyncStorage.getAllKeys);
};
