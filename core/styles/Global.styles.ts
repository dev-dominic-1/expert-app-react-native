/**
 * @author Dominic Hiland
 */

import { TextStyle, Platform } from "react-native";

interface Colors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  accent: string;
  accentDark: string;
  cardColor: string;
  background: string;
}

export const colors: Colors = {
  primary: "#B4D9B6",
  primaryLight: "#F5FFF7",
  primaryDark: "#18331C",
  secondary: "#bed9b9",
  secondaryLight: "#6E9971",
  secondaryDark: "#25502B",
  accent: "#AE8C99",
  accentDark: "#592A3C",
  cardColor: "#D7EED8",
  background: "#FFF",
};

export interface Fonts {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  h7: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  body3: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
}

export const iosFonts: Fonts = {
  h1: { fontFamily: "Arial", fontSize: 24, fontWeight: "600" },
  h2: { fontFamily: "Arial", fontSize: 24 },
  h3: { fontFamily: "Arial", fontSize: 20, fontWeight: "600" },
  h4: { fontFamily: "Arial", fontSize: 20 },
  h5: { fontFamily: "Arial", fontSize: 18, fontWeight: "500" },
  h6: { fontFamily: "Arial", fontSize: 16 },
  h7: { fontFamily: "Arial", fontSize: 14 },
  body1: { fontFamily: "Arial", fontSize: 20, fontWeight: "300" },
  body2: { fontFamily: "Arial", fontSize: 18 },
  body3: { fontFamily: "Arial", fontSize: 16, fontWeight: "300" },
  subtitle1: { fontFamily: "Arial", fontSize: 14, fontWeight: "300" },
  subtitle2: { fontFamily: "Arial", fontSize: 12, fontWeight: "200" },
};

export const androidFonts: Fonts = {
  h1: { fontFamily: "Roboto", fontSize: 24, fontWeight: "600" },
  h2: { fontFamily: "Roboto", fontSize: 24 },
  h3: { fontFamily: "Roboto", fontSize: 20, fontWeight: "600" },
  h4: { fontFamily: "Roboto", fontSize: 20 },
  h5: { fontFamily: "Roboto", fontSize: 18, fontWeight: "500" },
  h6: { fontFamily: "Roboto", fontSize: 16 },
  h7: { fontFamily: "Roboto", fontSize: 14 },
  body1: { fontFamily: "Roboto", fontSize: 20, fontWeight: "300" },
  body2: { fontFamily: "Roboto", fontSize: 18 },
  body3: { fontFamily: "Roboto", fontSize: 16, fontWeight: "300" },
  subtitle1: { fontFamily: "Roboto", fontSize: 14, fontWeight: "300" },
  subtitle2: { fontFamily: "Roboto", fontSize: 12, fontWeight: "200" },
};

/**
 * Function to get system-specific fonts bundle
 * @returns {Fonts} System's correct font configuration
 */
export function fonts(): Fonts {
  const os = Platform.OS;
  if (os === "android") return androidFonts;
  else return iosFonts;
}
