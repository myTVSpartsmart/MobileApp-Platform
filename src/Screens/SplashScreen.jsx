import React, { useState, useEffect } from "react";
import { View,Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { getStorageData } from "../service/localstorage";
import { getAlert } from "../service/apiService";
import DeviceInfo from "react-native-device-info";
const SplashScreen = () => {
  const navigation = useNavigation();
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const appVersion = DeviceInfo.getVersion();
  const buildNumber = DeviceInfo.getBuildNumber();
  console.log("platform ---------", Platform.OS);
  console.log("appVersion ---------", appVersion);
  console.log("buildNumber ---------", buildNumber);
  const data = {
    appId: "hypermart-android",
    versionCode: appVersion,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch login status
        const loggedIn = await getStorageData("is_Logged");
        setIsLogged(loggedIn === "true"); // Ensure you handle the stored data format correctly

        const alertResponse = await getAlert(data);

        // Navigate based on alert and login status
        // if (alertResponse?.success === true) {
        //   navigation.navigate("AlertScreen", { alertData: alertResponse });
        // } else if (loggedIn === "true") {
        //   navigation.navigate("DashScreen");
        // } else {
        //   navigation.navigate("LoginScreen");
        // }
        navigation.navigate("TabNavigator");
      } catch (error) {
        console.error("Error during splash setup: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "#0D0D0D" }}>
      <LottieView
        source={require("../assets/animations/Splash13.json")}
        autoPlay
        loop={false}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default SplashScreen;
