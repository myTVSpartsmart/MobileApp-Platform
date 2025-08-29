import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { DETAIL_R_ARROW_Image } from "./ImageManager";

const PutAwayItemCard = ({
  headerText,
  itemCode,
  quantity,
  onPress,
  showArrow,
}) => {
  return (
    <View style={styles.ItemDetail}>
      <View>
        <Text style={styles.ItemHeaderStyle}>{headerText}</Text>
        <Text style={styles.itemCode}>{itemCode}</Text>
        <Text style={styles.totalQuantity}>{quantity}</Text>
      </View>
      {showArrow && (
        <TouchableOpacity style={{ marginLeft: "auto" }} onPress={onPress}>
          <Image
            source={DETAIL_R_ARROW_Image}
            style={{ height: 28, width: 28 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ItemDetail: {
    backgroundColor: "#FFFFFF",
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    padding: 12,
  },
  ItemHeaderStyle: {
    color: "#141414",
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    fontWeight: "600",
  },
  itemCode: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    color: "#878787",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginTop: 2,
  },
  totalQuantity: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#1B50C6",
    fontWeight: "600",
    marginTop: 4,
  },
});

export default PutAwayItemCard;
