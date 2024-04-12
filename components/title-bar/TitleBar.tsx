import React from "react";
import {
  Text,
  View,
  ViewStyle,
  Dimensions,
  Image,
  ImageStyle,
  Pressable,
} from "react-native";
import { colors } from "../../core/styles/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ElevatedView from "../../core/components/views/ElevatedView";
import { goTo } from "../../core/navigation/Navigator";
import { useNavigation } from "@react-navigation/native";

interface TitleBarProps {
  style?: ViewStyle;
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

  const toolbarIconStyle: ImageStyle = {
    height: 32,
    width: 32,
  };

  return (
    <ElevatedView
      style={{
        view: {
          ...safeAreaStyle,
          ...flexStyle,
          backgroundColor: colors.secondary,
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
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        <Image
          source={require("../../assets/icons/menu-custom.png")}
          alt="Menu"
          style={toolbarIconStyle}
        />
        <Text>LOGO</Text>
        <Pressable onPress={() => goTo(navigator, "Home", true)}>
          <Image
            source={require("../../assets/icons/home-outline-custom.png")}
            alt="Home"
            style={toolbarIconStyle}
          />
        </Pressable>
      </View>
    </ElevatedView>
  );
};

export default TitleBar;
