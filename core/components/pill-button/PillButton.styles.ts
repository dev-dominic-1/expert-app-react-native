import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors, fonts } from "../../styles/Global.styles";
import { CrossPlatformElevation } from "../../styles/CrossPlatformElevation.styles";

const systemFonts = fonts();

export interface PillButtonStyles {
  button: ViewStyle;
  text: TextStyle;
}

export const styles: PillButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.accentDark,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    ...CrossPlatformElevation(),
  },
  text: Object.assign(
    {
      color: "white",
      paddingHorizontal: 32,
      textAlign: "center",
    },
    systemFonts.body1,
  ),
});
