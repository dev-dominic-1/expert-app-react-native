import { Platform, ViewStyle } from "react-native";

export const CrossPlatformElevation = (elevation: number = 3): ViewStyle => {
  switch (Platform.OS) {
    case "android":
      return { elevation };
    default:
      return {
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.25,
        shadowOffset: { height: elevation, width: 0 },
        shadowRadius: elevation * 1.25,
      };
  }
};
