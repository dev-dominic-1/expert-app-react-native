import React from "react";
import { Text, View } from "react-native";
import { colors, fonts } from "../../../core/styles/Global.styles";
import { CrossPlatformElevation } from "../../../core/styles/CrossPlatformElevation.styles";

interface WelcomeMessageProps {
  name: string;
}
const WelcomeMessage = (props: WelcomeMessageProps) => {
  return (
    <View
      style={{
        borderRadius: 999,
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: colors.cardColorDark,
        width: "100%",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Text style={{ ...fonts().h5, fontSize: 16 }}>
        Welcome, {props.name}!
      </Text>
      <Text style={fonts().h6}>Welcome Back! Here's what's coming up</Text>
    </View>
  );
};

export default WelcomeMessage;
