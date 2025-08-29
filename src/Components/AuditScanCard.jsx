import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const AuditScannedCard = ({ header, code, progress, itemsCount }) => {
  return (
    <View style={styles.scannedContained}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.code}>{code}</Text>
        <Text style={styles.auditStyle}>Audit</Text>
        <Progress.Bar
          progress={progress}
          width={null}
          height={4}
          borderRadius={0}
          color="#21C063"
          unfilledColor="#EEEEEE"
          borderWidth={0}
          style={styles.progressBar}
        />
        <View style={styles.progressTextContainer}>
          <Text style={styles.percentage}>{(progress * 100).toFixed(0)} %</Text>
          <View style={styles.itemsCountContainer}>
            <Text style={styles.itemsCount}>{itemsCount}</Text>
            <Text style={styles.itemsCountText}>  Part</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scannedContained: {
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    marginHorizontal: 14,
    marginVertical: 14,
  },
  progressBar: {
    marginVertical: 10,
  },
  header: {
    color: '#141414',
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    fontWeight: '600',
  },
  code: {
    color: '#878787',
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  auditStyle: {
    color: '#141414',
    fontFamily: 'GilroySemiBold',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
  },
  progressTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentage: {
    color: '#21C063',
    fontSize: 14,
    fontFamily: 'GilroySemiBold',
    fontWeight: '600',
  },
  itemsCountContainer: {
    flexDirection: 'row',
  },
  itemsCount: {
    color: '#181818',
    fontSize: 14,
    fontFamily: 'GilroyBold',
    fontWeight: '700',
  },
  itemsCountText: {
    color: '#969CAA',
    fontSize: 12,
    fontFamily: 'GilroyMedium',
    fontWeight: '500',
    marginTop: 2,
  },
});

export default AuditScannedCard;
