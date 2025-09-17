import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Profileimg from "../assets/images/Profileimg.png";

export default function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.header}>Profile</Text>
                </View>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <Image source={Profileimg} style={styles.avatar} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name}>Santhosh M</Text>
                        <Text style={styles.info}>1234567890</Text>
                        <Text style={styles.info}>testuser123@gmail.com</Text>
                    </View>
                    <TouchableOpacity onPress={() => alert("Logout pressed")}>
                        <Text style={styles.logout}>Logout</Text>
                    </TouchableOpacity>
                </View>

                {/* Details */}
                <Text style={styles.label}>
                    Department: <Text style={styles.lightText}>IT</Text>
                </Text>
                <Text style={styles.label}>
                    Reporting to: <Text style={styles.lightText}>teamlead@gmail.com</Text>
                </Text>
                <Text style={styles.label}>
                    Reporting to Email:{" "}
                    <Text style={styles.lightText}>teamlead@gmail.com</Text>
                </Text>

                {/* Options */}
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate("SupportScreen")}
                >
                    <MaterialCommunityIcons
                        name="shield-check-outline"
                        size={22}
                        color="#24358D"
                    />
                    <Text style={styles.optionText}>Support</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={24}
                        color="#999"
                        style={{ marginLeft: "auto" }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate("ChangePasswordScreen")}
                >
                    <View style={styles.iconWrapper}>
                        <MaterialCommunityIcons
                            name="pencil-outline"
                            size={22}
                            color="#24358D"
                        />
                    </View>
                    <Text style={styles.optionText}>Change password</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={24}
                        color="#999"
                        style={{ marginLeft: "auto" }}
                    />
                </TouchableOpacity>


                {/* Version */}
                <Text style={styles.version}>Version : 0.97</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    container: { flex: 1, backgroundColor: "#fff", padding: 20 },
    headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
    backButton: { padding: 5, marginRight: 5 },
    header: { fontSize: 18, fontWeight: "600", marginLeft: 5, color: "#000" },
    profileCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    avatar: { width: 60, height: 60, borderRadius: 8, marginRight: 15 },
    name: { fontSize: 16, fontWeight: "600" },
    info: { fontSize: 14, color: "#827F7F" },
    logout: { color: "red", fontWeight: "600" },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#000000",
        fontWeight: "700",
        marginTop: 25,
    },
    lightText: { color: "#827F7F" },
    option: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 8,
    },
    optionText: { fontSize: 16, marginLeft: 10, color: "#000", fontWeight: "600" },
    version: { marginTop: 20, fontSize: 16, color: "#000" },

});
