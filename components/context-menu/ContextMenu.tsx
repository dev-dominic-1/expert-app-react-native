import React from "react";
import { Dimensions, View } from "react-native";
import ContextMenuUnderlay from "./ContextMenuUnderlay";
import ContextMenuOptions from "./ContextMenuOptions";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ContextMenuProps {
  onPressOutside: Function;
}
const ContextMenu = (props: ContextMenuProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: Dimensions.get("window").height + insets.top + insets.bottom,
        width: Dimensions.get("window").width,
        zIndex: 997,
      }}
    >
      <ContextMenuUnderlay onPress={() => props.onPressOutside()} />
      <ContextMenuOptions onPressOption={() => props.onPressOutside()} />
    </View>
  );
};

export default ContextMenu;
