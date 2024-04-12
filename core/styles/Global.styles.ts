/**
 * @author Dominic Hiland
 */

import { TextStyle, Platform } from "react-native";

interface Colors {
  primary: string;
  secondary: string;
  secondaryLighten1: string;
  secondaryLighten2: string;
  background: string;
  icon: string;
}

export const colors: Colors = {
  primary: "#502d3b",
  secondary: "#bed9b9",
  secondaryLighten1: "#eaf7ea",
  secondaryLighten2: "#f7fff8",
  background: "#FFF",
  icon: "#21331e",
};

export interface Fonts {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
}

export const iosFonts: Fonts = {
  h1: { fontFamily: "Arial", fontSize: 16 },
  h2: { fontFamily: "Arial", fontSize: 16 },
  h3: { fontFamily: "Arial", fontSize: 16 },
  body1: { fontFamily: "Arial", fontSize: 16 },
  body2: { fontFamily: "Arial", fontSize: 16 },
  subtitle1: { fontFamily: "Arial", fontSize: 16 },
  subtitle2: { fontFamily: "Arial", fontSize: 16 },
};

export const androidFonts: Fonts = {
  h1: { fontFamily: "Roboto", fontSize: 24 },
  h2: { fontFamily: "Roboto", fontSize: 24 },
  h3: { fontFamily: "Roboto", fontSize: 24 },
  body1: { fontFamily: "Roboto", fontSize: 24 },
  body2: { fontFamily: "Roboto", fontSize: 24 },
  subtitle1: { fontFamily: "Roboto", fontSize: 24 },
  subtitle2: { fontFamily: "Roboto", fontSize: 24 },
};

/**
 * Function to get system-specific fonts bundle
 * @returns {Fonts} System's correct font configuration
 */
export function fonts(): Fonts {
  const os = Platform.OS;
  if (os === "ios") return iosFonts;
  else if (os === "android") return androidFonts;
  else {
    return {
      h1: { fontFamily: "Arial", fontSize: 24 },
      h2: { fontFamily: "Arial", fontSize: 24 },
      h3: { fontFamily: "Arial", fontSize: 24 },
      body1: { fontFamily: "Arial", fontSize: 24 },
      body2: { fontFamily: "Arial", fontSize: 24 },
      subtitle1: { fontFamily: "Arial", fontSize: 24 },
      subtitle2: { fontFamily: "Arial", fontSize: 24 },
    };
  }
}
