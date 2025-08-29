import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PriceBox = ({ price, Mrp }) => {
  return (
    <View>
      <View style={styles.mrpBox}>
        <Text style={styles.priceStyle}>₹ {price}</Text>
      </View>
      <Text style={styles.MrpStyle}>{Mrp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mrpBox: {
    backgroundColor: "#080808",
  },
  priceStyle: {
    fontFamily: "GilroySemiBold",
    fontSize: 12,
    color: "#FDFCF7",
    fontWeight: "600",
    marginHorizontal: 15,
    marginVertical: 6,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  MrpStyle: {
    fontFamily: "GilroySemiBold",
    fontSize: 12,
    color: "#EE4E38",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 4,
    letterSpacing: 0.2,
  },
});

export default PriceBox;
