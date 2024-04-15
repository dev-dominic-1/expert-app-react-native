import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { styles as PillButtonStyles } from "./PillButton.styles";
import { colors } from "../../styles/Global.styles";
import { CrossPlatformElevation } from "../../styles/CrossPlatformElevation.styles";

interface PillButtonProps {
  title: string;
  onPress: () => void;
  variant: "filled" | "outlined";
  height?: number;
  style?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}

export const PillButton = (props: PillButtonProps) => {
  const { button: pressableStyles = {}, text: textStyles = {} } = {
    button: {
      ...PillButtonStyles.button, // Default styles
      ...(props.variant === "outlined"
        ? {
            // Outlined variant styles
            backgroundColor: "transparent",
            borderColor: colors.accentDark,
            borderWidth: 1,
            ...CrossPlatformElevation(0),
          }
        : {}),
      ...(props.style?.button ?? {}), // Custom styles
      height: props.height ?? 40, // Forced styles
    },
    text: {
      ...PillButtonStyles.text, // Default styles
      ...(props.variant === "outlined"
        ? {
            // Outlined variant styles
            color: colors.accentDark,
          }
        : {}),
      ...(props.style?.text ?? {}), // Custom styles
    },
  };

  return (
    <TouchableOpacity
      style={pressableStyles}
      onPress={props.onPress}
    >
      <Text style={textStyles}>{props.title}</Text>
    </TouchableOpacity>
  );
};
