// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
//   // Make sure you have this library installed

// const AuditListCard = ({
//   rack,
//   locator,
//   totalproduct,
//   totalqunatity,
//   onPress
// }) => {
 
//   return (
//     <View style={styles.ItemDetailStyle}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'flex-start',
//         }}>
//         <Text style={[styles.RackheaderStyle, {flex: 1, textAlign: 'left'}]}>
//           Rack
//         </Text>
//         <Text style={[styles.RackheaderStyle, {flex: 1, textAlign: 'left'}]}>
//           Locator
//         </Text>
//       </View>
//       <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
//         <Text style={[styles.RackFootervalue, {flex: 1, textAlign: 'left'}]}>
//           {rack}
//         </Text>
//         <Text style={[styles.RackFootervalue, {flex: 1, textAlign: 'left'}]}>
//         {locator}
//         </Text>
//       </View>
//       {/* <Text style={{marginTop: 8, color: '#2E2E30'}}>
//         - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//       </Text> */}
//       <View  style={{marginTop: 8}}/>
//       <View style={styles.separator} />
//       {/* <Text style={{color: '#2E2E30'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text> */}
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-evenly',
//         //   marginTop: 8,
//         }}>
//         <View style={{flexDirection: 'row', textAlign:'left', flex: 1}}>
//         <Text style={styles.totalItem}>{totalproduct} </Text>
//         <Text style={styles.totalItem}>Products</Text>
//         </View>
//         <View style={{flexDirection: 'row', textAlign:'left', flex: 1}}>
//           <Text style={styles.totalQuantatiy}>{totalqunatity} </Text>
//           <Text style={styles.quantatityStyle}>Qty</Text>
//         </View>
//       </View>
//       <TouchableOpacity onPress={onPress}>
//       <View style={styles.buttonContainer}>
//       <Text style={styles.checkin}>Scan</Text>
//       </View>
//       </TouchableOpacity>
//     </View> 
//   );
// };

// const styles = StyleSheet.create({
//   RackheaderStyle: {
//     fontFamily: 'GilroySemiBold',
//     fontSize: 14,
//     color: '#676D75',
//     fontWeight: '600',
//     // marginTop: 8,
//   },
//   RackFootervalue: {
//     fontFamily: 'GilroySemiBold',
//     fontSize: 14,
//     color: '#FDFCF7',
//     fontWeight: '600',
//     marginTop: 8,
//   },
//   ItemDetailStyle: {
//     borderColor: '#2E2E30',
//     borderWidth: 1,
//     padding: 12,
//     backgroundColor: '#1C1C1E',
//     marginTop: 20,
//   },
//   totalItem: {
//     fontFamily: 'GilroySemiBold',
//     fontSize: 14,
//     color: '#29C584',
//     fontWeight: '600',
//   },
//   totalQuantatiy: {
//     fontFamily: 'GilroySemiBold',
//     fontSize: 14,
//     color: '#FDFCF7',
//     fontWeight: '600',
//   },
//   quantatityStyle: {
//     fontFamily: 'GilroyMedium',
//     fontSize: 14,
//     color: '#676D75',
//     fontWeight: '500',
//   },
//   buttonContainer: {
//     backgroundColor: '#21C063',
//     alignItems: 'center',
//     bottom: 0,
//     marginTop: 15,
//   },
//   checkin: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontFamily: 'GilroySemiBold',
//     marginVertical: 12,
//     textAlign: 'center',
//   },
//   separator: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#2E2E30',
//     width: '100%',
//     borderStyle: 'dashed',
//     marginVertical: 8,
//   },
// });

// export default AuditListCard;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager } from "react-native";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
// Enable LayoutAnimation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AuditListCard = ({ auditNo, auditId, createDate, status, racks }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigation = useNavigation();
  // Status color
  const getStatusColor = () => {
    if (status === "Complete") return "green";
    if (status === "In Complete") return "orange";
    return "#bbb";
  };

  const handleScanPage = () => {
    navigation.navigate("AuditItemDetails");
  };
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View
      style={{
        backgroundColor: isExpanded ? "#2a2a2a" : "#1e1e1e", // darker bg when expanded
        padding: isExpanded ? 20 : 12, // more padding when expanded
        borderRadius: 6,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#333",
      }}
    >
      {/* Header Row */}
      <TouchableOpacity
        onPress={toggleExpand}
        style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
      >
        {/* Left Section - Audit Number & ID */}
        <View>
          <Text style={{ color: "#bbb", fontSize: 14, fontWeight: "600" }}>
            {auditNo}
          </Text>
          <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
            {auditId}
          </Text>
        </View>

        {/* Right Section - Create Date & Status */}
        <View style={{ alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#bbb", fontSize: 14, marginRight: 5 }}>
              Create Date
            </Text>
            {isExpanded ? (
              <ChevronUp size={20} color="#fff" />
            ) : (
              <ChevronDown size={20} color="#fff" />
            )}
          </View>
          <Text style={{ color: "#fff", fontSize: 14 }}>{createDate}</Text>
          <Text style={{ color: getStatusColor(), fontSize: 14, marginTop: 2 }}>
            {status}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Dropdown Section */}
      {isExpanded && (
        <View style={{ marginTop: 15 }}>
          {racks && racks.length > 0 ? (
            racks.map((rack, index) => (
              <TouchableOpacity
                key={index}
                 onPress={handleScanPage}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 6,
                  backgroundColor: "#3a3a3a",
                  padding: 10,
                  borderRadius: 4,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Rack: {rack.rackNo}</Text>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Locator: {rack.locator}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={{ color: "#aaa", fontSize: 15 }}>No rack details available</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default AuditListCard;
