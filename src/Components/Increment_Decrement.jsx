import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Vibration,
} from "react-native";
import { MiNUSPNG_Image, PLUSPNG_Image } from "./ImageManager";

const IncrementDecrement = ({
  quantity,
  onDecrement,
  onIncrement,
  containerStyle,
  inputStyle,
  decrementButtonStyle,
  incrementButtonStyle,
  handleEditquantity,
}) => {
  const handleDecrementWithVibration = () => {
    Vibration.vibrate();
    onDecrement();
  };
  const handleIncrementWithVibration = () => {
    Vibration.vibrate();
    onIncrement();
  };

  return (
    <View style={[styles.quantityContainer, containerStyle]}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={handleDecrementWithVibration}>
          <View style={[styles.buttonStyle, decrementButtonStyle]}>
            <Image source={MiNUSPNG_Image} style={styles.imageStyle} />
          </View>
        </TouchableOpacity>
        <TextInput
          style={[styles.quantityTextInput]}
          value={String(quantity)}
          keyboardType="numeric"
          onChangeText={(text) => {
            const sanitizedText = text.replace(/[^0-9]/g, '');
    console.log("edited text", sanitizedText);
    handleEditquantity(sanitizedText);
          }}
        />
        <TouchableOpacity onPress={handleIncrementWithVibration}>
          <View style={[styles.buttonStyle, incrementButtonStyle]}>
            <Image source={PLUSPNG_Image} style={styles.imageStyle} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  innerContainer: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 34,
    width: 34,
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
    padding: 1,
  },
});

export default IncrementDecrement;
