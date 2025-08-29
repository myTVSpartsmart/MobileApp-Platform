import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SCANAIMPNG_Image } from "./ImageManager";

const ScanDetailCard = ({ code, itemCount, data }) => {
  // Utility function to truncate text
const truncateText = (text, maxLength = 35) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
};
  return (
    <View style={styles.itemListContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image source={SCANAIMPNG_Image} style={styles.image} />
        <Text style={styles.codeheader}>{code}</Text>
        <Text style={styles.totalItems}>{itemCount}</Text>
      </View>
      {data.map((el, index) => (
        <React.Fragment key={index}>
          <View>
            <Text style={styles.title}>{truncateText(el?.description)}</Text>
            <Text style={styles.code}>{el?.partNumber}</Text>
            <Text style={styles.totalQuantity}>{`${el?.qty} Quantity`}</Text>
          </View>
          {index !== data.length - 1 && (
            <>
              <View style={{ marginTop: 8 }} />
              <View style={styles.separator} />
            </>
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemListContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  image: {
    height: 32,
    width: 32,
  },
  codeheader: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#141414",
    fontWeight: "600",
    marginLeft: 8,
    marginTop: 4,
  },
  totalItems: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#29C584",
    fontWeight: "600",
    marginLeft: 8,
    marginTop: 4,
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#141414",
    fontWeight: "600",
    marginTop: 12,
  },
  code: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    color: "#878787",
    fontWeight: "500",
    marginTop: 4,
    letterSpacing: 0.5,
  },
  totalQuantity: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#1B50C6",
    fontWeight: "600",
    marginTop: 4,
    letterSpacing: 0.2,
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    width: "100%",
    borderStyle: "dashed",
    marginVertical: 8,
  },
});

export default ScanDetailCard;
