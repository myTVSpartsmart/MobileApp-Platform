import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { PassHide_Image, PassView_Image } from "./ImageManager";
const CustomPassField = ({
  placeholder,
  value,
  onChangeText,
  label,
  isSecure,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isSecure);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  
  return (
    <View>
      <Text style={styles.heardertext}>{label}</Text>
      <View
        style={[styles.container, { borderColor: "#666666", borderWidth: 1.5 }]}
      >
        <TextInput
          style={[styles.input]}
          placeholder={placeholder}   
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#FDFCF7"
          
        />
        <TouchableOpacity
          onPress={toggleSecureEntry}
          style={styles.iconContainer}
        >
          <Image
            source={secureTextEntry ? PassView_Image : PassHide_Image}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#121212",
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    height: 44,
    fontFamily: "GilroyRegular",
    fontWeight: "400",
    marginLeft: 10,
    color: "#FDFCF7",
    fontSize: 14,
  },
  heardertext: {
    fontSize: 14,
    color: "#B9B9B6",
    fontWeight: "600",
    fontFamily: "GilroySemiBold",
  },
});

export default CustomPassField;
