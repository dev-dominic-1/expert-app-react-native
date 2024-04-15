import React from "react";
import {
  Text,
  Image,
  View,
  ViewStyle,
  Dimensions,
  ImageStyle,
  TouchableOpacity,
  Platform,
} from "react-native";
import { colors } from "../../core/styles/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ElevatedView from "../../core/components/views/ElevatedView";
import { goTo } from "../../core/navigation/Navigator";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

interface TitleBarProps {
  style?: ViewStyle;
  onPressContextMenu: Function;
}

const TitleBar = (props: TitleBarProps) => {
  const navigator = useNavigation();
  const insets = useSafeAreaInsets();

  const safeAreaStyle: ViewStyle = {
    paddingTop: insets.top,
    height: 64 + insets.top,
  };

  const flexStyle: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <ElevatedView
      style={{
        view: {
          ...safeAreaStyle,
          ...flexStyle,
          backgroundColor: colors.primary,
          ...(props.style ?? {}), // Custom Styles
        },
        shadow: {
          width: Dimensions.get("window").width,
        },
      }}
    >
      <View
        style={{
          ...flexStyle,
          alignItems: "center",
          paddingTop: 8,
          paddingHorizontal: 8,
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={() => props.onPressContextMenu()}>
          <Feather
            name="menu"
            size={24}
            color={colors.primaryDark}
            style={{ padding: 12 }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/Primary_Logo.png")}
          alt="Logo"
          style={{
            height: 25,
            width: Platform.OS === "web" ? 95 : 89,
          }}
        />
        <TouchableOpacity onPress={() => goTo(navigator, "Home", true)}>
          <Feather
            name="home"
            size={24}
            color={colors.primaryDark}
            style={{ padding: 12 }}
          />
        </TouchableOpacity>
      </View>
    </ElevatedView>
  );
};

export default TitleBar;
