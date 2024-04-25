import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { colors, fonts } from "../../core/styles/Global.styles";
import { CrossPlatformElevation } from "../../core/styles/CrossPlatformElevation.styles";

interface Structure {
  style: {
    section: ViewStyle;
    sectionLabel: TextStyle;
    card: ViewStyle;
    cardContent: TextStyle;
  };
}
export const defaultCallDetailsState: Structure = {
  style: {
    section: {
      paddingTop: 16,
      flexDirection: "column",
      gap: 8,
      width: "100%",
    },
    sectionLabel: {
      ...fonts().h5,
      fontSize: 16,
      textAlign: "left",
    },
    card: {
      padding: 16,
      backgroundColor: colors.cardColor,
      borderRadius: 12,
      ...CrossPlatformElevation(3),
    },
    cardContent: {
      ...fonts().h6,
      paddingTop: 8,
      lineHeight: 22,
    },
  },
};
export const CallDetailsContext = React.createContext(defaultCallDetailsState);
