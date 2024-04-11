import React from "react";
import {Button, Pressable, Text, TextStyle, ViewStyle} from "react-native";
import {styles as PillButtonStyles} from "./PillButton.styles"
import {colors} from "../../styles/Global.styles";

interface PillButtonProps {
  title: string,
  onPress: () => void,
  styles?: {
    button?: ViewStyle,
    text?: TextStyle
  }
}

export const PillButton = (props: PillButtonProps) => {

  const {button: pressableStyles = {}, text: textStyles = {}} = {
      button: {...PillButtonStyles.button, ...(props.styles?.button ?? {})},
      text: {...PillButtonStyles.text}, ...(props.styles?.text ?? {}),
    }

  return (
    <Pressable
      style={pressableStyles}
      onPress={props.onPress}
    >
      <Text style={textStyles}>{props.title}</Text>
    </Pressable>
  )
}