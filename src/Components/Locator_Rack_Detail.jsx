import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LocatorRackDetail = ({locator, rack, itemCount, totalQuantity}) => {
  return (
    <View style={styles.ItemDetailStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        {rack &&
          <Text style={[styles.RackheaderStyle, {flex: 1, textAlign: 'left'}]}>
          Rack
        </Text> }
        {locator && 
          <Text style={[styles.RackheaderStyle, {flex: 1, textAlign: 'left'}]}>
          Locator
        </Text>}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      {rack && 
        <Text style={[styles.RackFootervalue, {flex: 1, textAlign: 'left'}]}>
          {rack}
        </Text> }
        {locator && <Text style={[styles.RackFootervalue, {flex: 1, textAlign: 'left'}]}>
          {locator}
        </Text>}
      </View>
      <View  style={{marginTop: 8}}/>
      <View style={styles.separator} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 8,
        }}>
        <Text style={styles.totalItem}>{itemCount} ITEMS</Text>
        <View style={{flexDirection: 'row', flex: 1, textAlign: 'left',}}>
          <Text style={styles.totalQuantatiy}>{totalQuantity} </Text>
          <Text style={styles.quantatityStyle}>Qty</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RackheaderStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#676D75',
    fontWeight: '500',
    // marginTop: 8,
  },
  RackFootervalue: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#FDFCF7',
    fontWeight: '500',
    marginTop: 8,
    letterSpacing: 0.5,
  },
  ItemDetailStyle: {
    borderColor: '#2E2E30',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#1C1C1E',
  },
  totalItem: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#29C584',
    fontWeight: '500',
    textAlign: 'left',
    flex: 1,
    letterSpacing: 0.3,
  },
  totalQuantatiy: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#FDFCF7',
    fontWeight: '500',
    letterSpacing: 0.9,
  },
  quantatityStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#676D75',
    fontWeight: '500',
  },
    separator: {
    borderBottomWidth: 2,
    borderBottomColor: '#2E2E30',
    width: '100%',
    borderStyle: 'dashed',
    marginVertical: 8,
  },
});

export default LocatorRackDetail;
