import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function SupportScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>Support</Text>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Kindly Call Our customer support between {"\n"} 9.00AM to 6.00AM
          </Text>
        </View>

        {/* Technical Support */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Technical Support</Text>
            <MaterialCommunityIcons
              name="cog-outline"
              size={22}
              color="#000"
            />
          </View>
          <Text style={styles.detail}>
            <MaterialCommunityIcons name="phone-outline" size={18} /> +91
            8467847934
          </Text>
          <Text style={styles.detail}>
            <MaterialCommunityIcons name="email-outline" size={18} />{" "}
            Gshguiw7@gmail.com
          </Text>
        </View>

        {/* Business Support */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Business Support</Text>
            <MaterialCommunityIcons
              name="briefcase-outline"
              size={22}
              color="#000"
            />
          </View>
          <Text style={styles.detail}>
            <MaterialCommunityIcons name="phone-outline" size={18} /> +91
            8467847934
          </Text>
          <Text style={styles.detail}>
            <MaterialCommunityIcons name="phone-outline" size={18} /> +91
            8467847934
          </Text>
          <Text style={styles.detail}>
            <MaterialCommunityIcons name="email-outline" size={18} />{" "}
            Gshguiw7@gmail.com
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, padding: 20 },
  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  backButton: { padding: 5, marginRight: 5 },
  header: { fontSize: 18, fontWeight: "600", marginLeft: 5, color: "#000" },
  infoCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    elevation: 2,
    marginBottom: 40,
  },
  infoText: { textAlign: "center", fontSize: 15, color: "#000000",fontWeight: "600" },
  section: { marginBottom: 40 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#000" },
  detail: { fontSize: 14, color: "#333", marginBottom: 25 },
});
