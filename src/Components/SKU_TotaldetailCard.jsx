import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PriceBox from "./PriceBox";

const SKU_DetailCard = ({
  header,
  code,
  quantity,
  pack,
  price,
  listPrice,
  MRPstyle,
  ListpriceStyle,
  showOutofStock,
}) => {
  // Utility function to truncate text
const truncateText = (text, maxLength = 40) => {
  console.log("Text Length", text.length);
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
};

  return (
    <View style={styles.cardStyle}>
      <View style={styles.contentPadding}>
        <Text style={styles.headerText}>{truncateText(header)}</Text>
        <Text style={styles.codeStyle}>{code}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {showOutofStock ? (
            <View>
              <Text style={styles.outofstock}>Out Of Stock</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.totalQuantity}>{quantity}</Text>
              <Text style={styles.packOf2Style}>{pack}</Text>
            </View>
          )}
          <View style={{ flexDirection: "row" }}>
            <PriceBox price={price} Mrp={MRPstyle} />
            <View style={{ marginLeft: 10 }} />
            <PriceBox price={listPrice} Mrp={ListpriceStyle} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#FFFFFF",
  },
  headerText: {
    fontFamily: "GilroySemiBold",
    fontSize: 16,
    color: "#141414",
    fontWeight: "600",
    marginBottom: 5,
  },
  codeStyle: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    color: "#878787",
    fontWeight: "500",
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  contentPadding: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  totalQuantity: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#1B50C6",
    fontWeight: "600",
  },
  packOf2Style: {
    marginTop: 4,
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#21C063",
    fontWeight: "600",
  },
  outofstock: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#EE4E38",
    fontWeight: "600",
  },
});

export default SKU_DetailCard;
