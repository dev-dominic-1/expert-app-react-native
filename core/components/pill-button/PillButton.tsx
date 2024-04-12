import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { styles as PillButtonStyles } from "./PillButton.styles";
import { colors } from "../../styles/Global.styles";

interface PillButtonProps {
  title: string;
  onPress: () => void;
  variant: "filled" | "outlined";
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
            borderColor: colors.primary,
            borderWidth: 1,
          }
        : {}),
      ...(props.style?.button ?? {}), // Custom styles
    },
    text: {
      ...PillButtonStyles.text, // Default styles
      ...(props.variant === "outlined"
        ? {
            // Outlined variant styles
            color: colors.primary,
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
