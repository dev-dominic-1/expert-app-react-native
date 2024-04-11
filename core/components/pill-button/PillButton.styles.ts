import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {colors, fonts} from "../../styles/Global.styles";

const systemFonts = fonts()

export interface PillButtonStyles {
  button: ViewStyle,
  text: TextStyle
}

export const styles: PillButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
    width: 'auto',
  },
  text: Object.assign({
    color: 'white',
    paddingHorizontal: 32,
  }, systemFonts.body1)
})