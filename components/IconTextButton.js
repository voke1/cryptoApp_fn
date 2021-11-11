import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { FONTS, COLORS, SIZES } from "../constants";

const IconTextButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
        }}
        resizeMode="contain"
      />

      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
