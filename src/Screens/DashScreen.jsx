import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import CircleChip from "../Components/HomeScreen_Chips";
import {
  AUDITPNG_Image,
  CALLPNG_Image,
  HeaderPNG_Image,
  LOGOUTPNG_Image,
  PICKPNG_Image,
  PUTAWAY_Image,
  RECEIVEPNG_Image,
  RIGHTBLACKARROW_Image,
  SCANPNG_Image,
  SETINGPNG_Image,
  TRANSFERPNG_Image,
} from "../Components/ImageManager";
import LottieView from "lottie-react-native";
import useUserName from "../Components/CustomUserName";
import CustomModal from "../Components/CustomBottomSheet";

// import { useMutation } from "react-query";
import { logout } from "../service/logIn_logout.js";
import {
  BRANCH_NAME,
  clearStorage,
  getStorageData,
  STAFF_CODE,
  STAFF_NAME,
} from "../service/localstorage";
import LoaderPage from "../Components/Loader.jsx";
import { useDispatch } from "react-redux";
import { resetData } from "../store/itemsSlice.js";
import { resetPickData } from "../store/pickSlice.js";

const DashScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const { mutate, data, isLoading } = useMutation(logout);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const staffName = useUserName();


  const handleSettingsPress = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const OpenSkudetail = () => {
    navigation.navigate("SKUScanScreen");
  };

  return (
    <View style={styles.safeareaContainer}>
      <View>
        <Image
          source={HeaderPNG_Image}
          style={{ width: 360, height: 88, justifyContent: "center" }}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.HeaderName}>Hi, {staffName}</Text>
          <TouchableOpacity onPress={handleSettingsPress}>
            <Image source={SETINGPNG_Image} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
      <View style={{ marginTop: 24 }} />
      <View style={{ marginHorizontal: 20 }}>
        <View>
          <Text style={styles.headertext}>Sales</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CircleChip
              source={PICKPNG_Image}
              text="Pick"
              onPress={() => {
                dispatch(resetPickData());
                navigation.navigate("PickScannerScreen");
              }}
            />
            <View>
              <TouchableOpacity onPress={OpenSkudetail}>
                <View style={styles.circleContainerCS}>
                  <LottieView
                    source={require("../assets/animations/wired_outline.json")}
                    autoPlay
                    loop
                    style={{ width: 32, height: 32 }}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.title}>SKU Search</Text>
            </View>
            <View style={styles.circleContainer} />
            <View style={styles.circleContainer} />
          </View>
          <View />
          <View style={{ marginTop: 24 }} />
         
        </View> 
      </View>
      <CustomModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        style={[styles.modal]}
      >
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.settingStyle}>Settings</Text>
          </View>

          <View
            style={{
              marginBottom: 14,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={CALLPNG_Image} style={{ height: 24, width: 24 }} />
              <Text style={styles.modalText}>Contact support</Text>
            </View>
            <View style={{ marginTop: 12 }} />
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.callTitle}>Call :</Text>
                <View style={{ marginTop: 10 }} />
                <Text style={styles.callTitle}>Email :</Text>
              </View>
              <View>
                <Text style={styles.callSubtitle}>0444 813 7000</Text>
                <Text style={[styles.callSubtitle, { marginTop: 10 }]}>
                  {" "}
                  support@uitoux.in
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 4 }} />

          <TouchableOpacity >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={LOGOUTPNG_Image}
                  style={{ height: 24, width: 24 }}
                />
                <Text style={[styles.modalText, { marginBottom: 8 }]}>
                  Logout
                </Text>
              </View>
              <Image
                source={RIGHTBLACKARROW_Image}
                style={{ height: 24, width: 24 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </CustomModal>
      {/* {isLoading && <LoaderPage />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    justifyContent: "center",
    alignItems: "center",
  },
  safeareaContainer: {
    flex: 1,
    backgroundColor: "#090909",
  },

  headertext: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    fontWeight: "600",
    color: "#5C5C5C",
    marginBottom: 10,
  },
  circleContainer: {
    backgroundColor: "#090909",
    borderRadius: 90,
    height: 64,
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  circleContainerCS: {
    backgroundColor: "#1C1C1E",
    borderRadius: 90,
    height: 64,
    width: 64,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
  },
  modalText: {
    fontSize: 14,
    fontFamily: "GilroySemiBold",
    fontWeight: "600",
    color: "#141414",
    marginLeft: 14,
    marginTop: 3,
  },
  settingStyle: {
    fontSize: 18,
    color: "#141414",
    fontWeight: "600",
    fontFamily: "GilroySemiBold",
    marginBottom: 18,
  },
  HeaderName: {
    fontFamily: "GilroyMedium",
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    marginTop: 33,
    alignItems: "center",
    width: "100%", // ensure that the container takes the full width
    paddingHorizontal: 16, // adjust as necessary for your layout
  },
  title: {
    fontFamily: "GilroyRegular",
    fontSize: 12,
    fontWeight: "400",
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  callTitle: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
    marginBottom: 3,
  },
  callSubtitle: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    fontWeight: "500",
    color: "#141414",
  },
  comingSoon: {
    borderColor: "#3D3D3D",
    borderWidth: 1,
    borderRadius: 60,
    bottom: -5,
    backgroundColor: "#181818",
    position: "absolute",
    height: 18,
    width: 75,
  },
});

export default DashScreen;
