import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// Make sure you have this library installed
import { CLOSEPNG_Image, PLUSPNG_Image } from "./ImageManager";
import IncrementDecrement from "./Increment_Decrement";
import PriceBox from "./PriceBox";

const CommonAddCart = ({
  scannedValue,
  scannedName,
  quantity,
  data,
  unitPrice,
  taxRate,
  handleRemove,
  handleIncrement,
  handleDecrement,
  totalquantity,
  handleEditquantity,
  showCloseButton, // Prop to control the rendering of the close button
  showTotalQuantity, // Prop to control the total quantity
  showPrice,
  showBarCode,
  barCode
}) => {
  const truncateText = (text, maxLength = 30) => {
    if (text?.length > maxLength + 2) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const price = (
    data?.taxRate > 0
      ? data?.unitPrice * quantity +
        (data?.unitPrice * quantity * data?.taxRate) / 100
      : data?.unitPrice * quantity
  ).toFixed(2);
  return (
    <View key={scannedValue} style={styles.Addcart}>
      <View style={{ margin: 12 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.Scannedname}>{truncateText(scannedValue)}</Text>
          {showCloseButton && (
            <TouchableOpacity onPress={() => handleRemove(scannedValue)}>
              <Image
                source={CLOSEPNG_Image}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.scannedCode}>{scannedName}</Text>
        {showTotalQuantity && (
          <Text style={styles.totalquantity}>{totalquantity}</Text>
        )}
        {
          showBarCode && 
          <View>
          <Text style={styles.barCode}>{barCode}</Text>
        </View>
        }
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IncrementDecrement
            quantity={quantity}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            decrementButtonStyle={{ backgroundColor: "black" }}
            incrementButtonStyle={{ backgroundColor: "black" }}
            handleEditquantity={handleEditquantity}
          />{
            showPrice &&
            <View style={{ justifyContent: "center" }}>
            <PriceBox price={price} Mrp={`incl. GST ${data?.taxRate} %`} />
          </View>
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Addcart: {
    backgroundColor: "white",
    // marginTop: 16,
  },
  Scannedname: {
    color: "#141414",
    fontFamily: "GilroySemiBold",
    fontSize: 16,
    fontWeight: "600",
  },
  scannedCode: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    color: "#878787",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginTop: 4,
  },
  totalquantity: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#1B50C6",
    fontWeight: "600",
    marginTop: 6,
  },
  quantityContainer: {
    flexDirection: "row",
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 12,
  },
  Incrementstyle: {
    backgroundColor: "white",
    // height: 24,
    // width: 24,
    alignItems: "center",
    // marginLeft: 14,
  },
  IncrementstylePlus: {
    backgroundColor: "black",

    // height: 24,
    // width: 24,
    alignItems: "center",
    // marginRight: 14
    // margin: 5,
  },
  quantityText: {
    // marginTop: 8,
    // marginLeft: 5,
    // width: 50,
    // marginRight: 5,
    color: "#141414",
    fontFamily: "GilroyMedium",
    textAlign: "center",
  },
  quantityTextInput: {
    height: 32,
    width: 50,
    color: "#141414",
    fontFamily: "GilroyMedium",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    borderColor: "black",
    // marginTop: 2,
    padding: 1,
  },
  barCode: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#1B50C6",
    fontWeight: "600",
    marginTop: 4,
  },
});

export default CommonAddCart;
