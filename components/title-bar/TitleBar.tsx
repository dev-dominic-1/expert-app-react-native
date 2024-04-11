import React from "react";
import { Text, View, StyleSheet, ViewStyle, Dimensions } from "react-native";
import { colors } from "../../core/styles/Global.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import ElevatedView from "../../core/components/views/ElevatedView";

interface TitleBarProps {
  style?: ViewStyle;
}

const TitleBar = (props: TitleBarProps) => {
  const insets = useSafeAreaInsets();

  const shadowStyle: ViewStyle = {
    position: "absolute",
    height: 10,
    width: Dimensions.get("window").width,
    bottom: -10,
    left: 0,
  };

  const safeAreaStyle: ViewStyle = {
    paddingTop: insets.top,
    height: 64 + insets.top,
  };

  const flexStyle: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  };

  const style = StyleSheet.create({
    view: {
      position: "relative",
      ...safeAreaStyle,
      ...flexStyle,
      backgroundColor: colors.secondary,
      ...(props.style ?? {}), // Custom Styles
    },
  });

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
      <Text>1</Text>
      <Text>LOGO</Text>
      <Text>3</Text>
    </ElevatedView>
  );
};

export default TitleBar;
