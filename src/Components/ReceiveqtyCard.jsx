import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReceiveInvoice = ({
  invoiceNo,
  invoiceDate,
  productCount,
  totalQuantity,
  showSupplierName,
  supplierName,
  supplierCode
}) => {
  return (
    <View style={styles.ItemDetailStyle}>
      <View style={styles.headerContainer}>
        <Text style={styles.invoiceStyle}>Invoice No</Text>
        <Text style={styles.invoiceDate}>{invoiceDate}</Text>
      </View>
      <View style={styles.invoiceNoContainer}>
        <Text style={styles.invoiceNo}>{invoiceNo}</Text>
        {showSupplierName &&
        <Text style={{fontFamily: "GilroySemiBold",
          fontSize: 14,
          color: "#FDFCF7",
          fontWeight: "600",marginTop:8}}>{supplierCode}</Text>
        }
      </View>
      {showSupplierName &&
        <Text style={{fontFamily: "GilroySemiBold",
          fontSize: 14,
          color: "#FDFCF7",
          fontWeight: "600",marginTop:12}}>{supplierName}</Text>
        }
      <View style={{ marginTop: 8 }} />
      <View style={styles.separator} />
      <View style={styles.productContainer}>
        <Text style={styles.productStyle}>{productCount} Products</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.totalQuantatiy}>{totalQuantity}</Text>
          <Text style={styles.quantatityStyle}> Qty</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemDetailStyle: {
    borderColor: "#1C1C1E",
    borderWidth: 1,
    padding: 12,
    backgroundColor: "#1C1C1E",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  invoiceDate: {
    fontFamily: "GilroyMedium",
    fontSize: 12,
    color: "#FDFCF7",
    fontWeight: "500",
  },
  invoiceStyle: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#676D75",
    fontWeight: "600",
  },
  invoiceNoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  invoiceNo: {
    flex: 1,
    textAlign: "left",
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#FDFCF7",
    fontWeight: "600",
    marginTop: 8,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  productStyle: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#29C584",
    fontWeight: "600",
  },
  quantityContainer: {
    flexDirection: "row",
  },
  totalQuantatiy: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    color: "#FDFCF7",
    fontWeight: "500",
  },
  quantatityStyle: {
    fontFamily: "GilroySemiBold",
    fontSize: 14,
    color: "#676D75",
    fontWeight: "600",
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: "#2E2E30",
    width: "100%",
    borderStyle: "dashed",
    marginVertical: 8,
  },
});

export default ReceiveInvoice;
