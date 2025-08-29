import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GARAGEWAREHOUSE_Image } from "./ImageManager";
import PriceBox from "./PriceBox";

const OrderSummaryCard = ({
  garageName,
  dateTime,
  status,
  onPress,
  price,
}) => {
  const statusColor = status === "Completed" ? "#02B240" : "#FF0000";
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.row}>
            <Image
              source={GARAGEWAREHOUSE_Image}
              style={{ width: 32, height: 32 }}
            />
            <Text style={styles.garageName}>{garageName}</Text>
            <Text style={styles.price}>{price ? `₹ ${price}` : ""}</Text>
            {/* <View style={styles.price}>
            <PriceBox price={price}/>
            </View> */}
          </View>
          <View style={[styles.row, styles.marginTop]}>
            <Text style={styles.dateTime}>{dateTime}</Text>
            {status === "Completed" && (
              <Text style={[styles.statusStyle, { color: statusColor }]}>{status}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  innerContainer: {
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",  // Center elements vertically
    justifyContent: "space-between",
  },
  garageName: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#141414",
    fontWeight: "600",
    marginLeft: 8,
    marginTop: 6,
    flex: 1,  // Allow garageName to take available space
  },
  price: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#1B50C6",
    fontWeight: "600",
    marginTop: 6,
    textAlign: "right",
  },
  dateTime: {
    fontFamily: "GilroySemiBold",
    fontSize: 12,
    color: "#969CAA",
    fontWeight: "500",
    marginTop: 6,
  },
  statusStyle: {
    fontFamily: "GilroySemiBold",
    fontSize: 12,
    marginTop: 6,
  },
});

export default OrderSummaryCard;