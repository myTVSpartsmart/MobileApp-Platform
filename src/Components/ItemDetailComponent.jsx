import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ItemDetailComponent = ({headerText, itemCode, quantity}) => {
  return (
    <View style={styles.ItemDetail}>
      <View style={{marginHorizontal: 12, marginVertical: 12}}>
        <Text style={styles.ItemHeaderStyle}>{headerText}</Text>
        <Text style={styles.itemCode}>{itemCode}</Text>
        <Text style={styles.totalQuantity}>{quantity} Quantity</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemDetail: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8
  },
  ItemHeaderStyle: {
    color: '#141414',
    fontFamily: 'GilroySemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
  itemCode: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#878787',
    fontWeight: '500',
    marginTop: 6,
    letterSpacing: 0.5,
  },
  totalQuantity: {
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    color: '#1B50C6',
    fontWeight: '600',
    marginTop: 8,
  },
});

export default ItemDetailComponent;
