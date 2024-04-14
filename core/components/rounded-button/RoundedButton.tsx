import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { PillButton } from "../pill-button/PillButton";

interface RoundedButtonProps {
  title: string;
  onPress: () => void;
  variant: "filled" | "outlined";
  style?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}

export const RoundedButton = (props: RoundedButtonProps) => {
  return (
    <PillButton
      title={props.title}
      onPress={() => props.onPress()}
      variant={props.variant}
      style={{
        button: {
          borderRadius: 20,
          ...(props.style?.button ?? {}),
        },
        text: props.style?.text ?? {},
      }}
    />
  );
};
