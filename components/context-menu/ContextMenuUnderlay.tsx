import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ContextMenuUnderlayProps {
  onPress: Function;
}
const ContextMenuUnderlay = (props: ContextMenuUnderlayProps) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 998,
        backgroundColor: "rgba(0,0,0,0.15)",
      }}
    />
  );
};

export default ContextMenuUnderlay;
