import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function ChangePasswordScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // state for eye icon toggle
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                </View>

                {/* Title */}
                <Text style={styles.title}>Change Password</Text>
                <Text style={styles.subtitle}>
                    Enter your registered email to Change your password
                </Text>

                {/* Email */}
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="example@gmail.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                {/* Password */}
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Enter new password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Ionicons
                            name={showPassword ? "eye" : "eye-off"}
                            size={22}
                            color="#707070"
                        />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password */}
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputField}
                        placeholder="*******"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                    />
                    <TouchableOpacity
                        onPress={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    >
                        <Ionicons
                            name={showConfirmPassword ? "eye" : "eye-off"}
                            size={22}
                            color="#707070"
                        />
                    </TouchableOpacity>
                </View>

                {/* Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => alert("Password Changed!")}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    container: { flex: 1, padding: 20 },
    headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
    backButton: { padding: 5, marginRight: 5 },

    title: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 5,
        color: "#000",
    },
    subtitle: {
        fontSize: 14,
        textAlign: "center",
        color: "#707070",
        marginBottom: 30,
        marginTop: 20,
    },

    label: { fontSize: 15, fontWeight: "600", color: "#000", marginBottom: 8 },

    input: {
        backgroundColor: "#F7F6F2",
        padding: 12,
        borderRadius: 8,
        fontSize: 15,
        marginBottom: 20,
    },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 20,
    },
    inputField: {
        flex: 1,
        fontSize: 15,
        paddingVertical: 12,
    },

    button: {
        backgroundColor: "#FF6B00",
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
});
