import React from "react";
import { View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ElevatedViewProps {
  elevation?: number;
  shadowColor?: string;
  children?: React.ReactNode | React.ReactNode[];
  style?: { view?: ViewStyle; shadow?: ViewStyle };
}

const ElevatedView = (props: ElevatedViewProps) => {
  return (
    <View
      style={{
        ...(props.style?.view ?? {}),
        position: "relative",
      }}
    >
      <LinearGradient
        colors={[props.shadowColor ?? "rgba(0,0,0,0.25)", "transparent"]}
        style={{
          height: props.elevation ?? 5,
          width: "100%",
          bottom: -1 * (props.elevation ?? 5),
          left: 0,
          ...(props.style?.shadow ?? {}),
          position: "absolute",
        }}
      />
      {props.children}
    </View>
  );
};

export default ElevatedView;
