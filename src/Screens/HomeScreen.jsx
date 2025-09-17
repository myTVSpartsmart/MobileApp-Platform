import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import {
  TopimageforHomepage,
  QuickMenuBackground,
  ViewHistoryIcon,
  Calender,
  createordericon,
} from "../Components/ImageManager";
import HeaderIcons from "../Components/HeaderIcons";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "../Screens/ProfileScreen";
import SupportScreen from "../Screens/SupportScreen";
const { height } = Dimensions.get("window");

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const navigation = useNavigation();
 

  useEffect(() => {
    setTimeout(() => {
      setName("User");
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 50 }}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const StatCircle = ({ number, label, iconName, customStyle }) => (
    <View style={[styles.statCard, customStyle]}>
      <View style={styles.circleWrapper}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.statNumber}>{number}</Text>
            <MaterialCommunityIcons name={iconName} size={24} color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.labelBubble}>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
  );

  const quickMenuItems = [
    {
      label: "View History",
      isImage: true,
      icon: ViewHistoryIcon,
      width: 100,
      height: 200,
      onPress: () => navigation.navigate("ViewHistoryScreen"),
    },
    {
      label: "Create Orders",
      isImage: true,
      icon: createordericon,
      width: 90,
      height: 100,
      onPress: () => {},
    },
    {
      label: "View Receipt",
      isImage: true,
      icon: Calender,
      width: 150,
      height: 400,
      onPress: () => {},
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <ImageBackground
        source={TopimageforHomepage}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
        resizeMode="contain"
      >
        <LinearGradient
          colors={["#24358D80", "#24358DFF"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.gradientOverlay}
        >
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greetingText}>Hello, {name}!</Text>
              <Text style={styles.subText}>Have a nice day</Text>
            </View>

            <HeaderIcons
              onCartPress={() => alert("Cart clicked")}
              onProfilePress={() => navigation.navigate("ProfileScreen")}
              colors="white"
            />
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* STAT CARDS */}
      <View style={styles.statsContainer}>
        <StatCircle number={3} label="Score" iconName="trophy" />
        <StatCircle
          number={17}
          label="Notification"
          iconName="bell"
          customStyle={{ marginTop: 20 }}
        />
        <StatCircle number={8} label="Team" iconName="handshake" />
      </View>

      {/* ATTENDANCE */}
      <Text style={styles.attendance}>Attendance</Text>
      <View style={styles.attendanceContainer}>
        <View style={styles.attendanceRow}>
          <MaterialCommunityIcons
            name="check-circle"
            size={22}
            color="#FF6F00"
          />
          <Text style={styles.attendanceText}> 02/09/2025 : 9.30 am</Text>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.noticeText}>
          Pls close your day after sign out!!!
        </Text>

        {/* METRIC CARDS */}
        <View style={styles.metricsRow}>
          <View style={styles.monthlyCard}>
            <View>
              <Text style={styles.monthlyTitle}>Monthly Order Value</Text>
              <Text style={styles.monthlyAmount}>₹ 9,54,808</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <AnimatedCircularProgress
                size={50}
                width={4}
                fill={65}
                tintColor="#09E018"
                backgroundColor="#eee"
              >
                {(fill) => (
                  <Text style={styles.progressText}>
                    {`${Math.round(fill)}%`}
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
          </View>

          <View style={styles.newCustomersCard}>
            <Text style={styles.newCustomerNumber}>1</Text>
            <Text style={styles.newCustomerLabel}>New Customers</Text>
          </View>
        </View>

        <View style={styles.metricsRow}>
          <View style={styles.monthlyCard}>
            <View>
              <Text style={styles.monthlyTitle}>Daily Order Value</Text>
              <Text style={styles.monthlyAmount}>₹ 15,608</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <AnimatedCircularProgress
                size={50}
                width={4}
                fill={65}
                tintColor="#8309E0"
                backgroundColor="#eee"
              >
                {(fill) => (
                  <Text style={styles.progressText}>
                    {`${Math.round(fill)}%`}
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
          </View>

          <View style={styles.newCustomersCard}>
            <Text style={styles.newCustomerNumber}>10</Text>
            <Text style={styles.newCustomerLabel}>Total Customers</Text>
          </View>
        </View>

        {/* QUICK MENU */}
        <Text style={styles.Quickmenu}>Quick Menu</Text>
        <View style={styles.quickMenuRow}>
          {quickMenuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.quickMenuItem}
              onPress={item.onPress}
            >
              <ImageBackground
                source={QuickMenuBackground}
                style={styles.quickMenuBackground}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.quickMenuIconContainer}>
                  <Image
                    source={item.icon}
                    style={{
                      width: item.width,
                      height: item.height,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View style={styles.quickMenuLabelBox}>
                  <Text style={styles.quickMenuLabel}>{item.label}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  imageBackground: { width: "100%", height: height * 0.335 },
  imageStyle: {
    marginTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  gradientOverlay: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 120,
  },
  greetingText: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },
  subText: { color: "#FFFFFF", fontSize: 14, marginTop: 4, letterSpacing: 2 },
  iconContainer: { flexDirection: "row" },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -160,
    marginBottom: 30,
  },
  statCard: { alignItems: "center" },
  circleWrapper: { alignItems: "center" },
  outerCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  innerCircle: {
    width: 50,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#24358D",
    justifyContent: "center",
    alignItems: "center",
  },
  statNumber: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  labelBubble: {
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 3,
    marginTop: -20,
  },
  statLabel: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
    textAlign: "center",
  },

  attendance: {
    fontSize: 19,
    color: "#000",
    fontWeight: "800",
    marginLeft: 20,
  },
  attendanceContainer: { paddingHorizontal: 20, marginTop: 10 },
  attendanceRow: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  attendanceText: {
    fontSize: 18,
    color: "#33436C",
    marginLeft: 30,
  },
  signInButton: {
    marginLeft: "auto",
    backgroundColor: "#FF6F00",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  signInButtonText: { color: "#fff", fontWeight: "600" },
  noticeText: {
    fontSize: 14,
    color: "#33436C",
    marginTop: 6,
    alignSelf: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },

  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  monthlyCard: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 4,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  monthlyTitle: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
    marginBottom: 4,
  },
  monthlyAmount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  newCustomersCard: {
    width: 120,
    backgroundColor: "#24358D",
    borderRadius: 12,
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingLeft: '10'

  },
  newCustomerNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  newCustomerLabel: {
    fontSize: 14,
    color: "#fff",
    marginTop: 6,
    textAlign: "center",
  },
  Quickmenu: {
    fontSize: 19,
    color: "#000",
    fontWeight: "800",
    marginTop: 6,
  },
  quickMenuRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    marginTop: 10,
  },
  quickMenuItem: {
    width: 100,
    height: 130,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 5,
    elevation: 6,
  },
  quickMenuBackground: {
    flex: 1,
    justifyContent: "space-between",
  },
  quickMenuIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  quickMenuIcon: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  quickMenuLabelBox: {
    width: "100%",
    backgroundColor: "#F26522",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  quickMenuLabel: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
});

export default HomeScreen;