import React from "react";
import { Dimensions, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../core/styles/Global.styles";
import ContextMenuOption from "./ContextMenuOption";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface ContextMenuProps {
  onPressOption: Function;
}
const ContextMenuOptions = (props: ContextMenuProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const ICON_SIZE = 24;

  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          paddingTop: 24 + insets.top,
          paddingBottom: insets.bottom,
          height: Dimensions.get("window").height + insets.top + insets.bottom,
          width:
            Dimensions.get("window").width * 0.8 - insets.left - insets.right,
          backgroundColor: colors.background,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          zIndex: 999,
        }}
      >
        <ContextMenuOption
          label="My Account"
          onPress={() => props.onPressOption()}
        />
        <ContextMenuOption
          icon={
            <Feather
              name="phone-call"
              color={colors.primaryDark}
              size={ICON_SIZE}
            />
          }
          label="My Calls"
          onPress={() => props.onPressOption()}
        />
        <ContextMenuOption
          icon={
            <Feather
              name="settings"
              color={colors.primaryDark}
              size={ICON_SIZE}
            />
          }
          label="Settings"
          onPress={() => props.onPressOption()}
        />
        <ContextMenuOption
          icon={
            <Feather
              name="help-circle"
              color={colors.primaryDark}
              size={ICON_SIZE}
            />
          }
          label="Help"
          onPress={() => props.onPressOption()}
        />
      </View>
    </>
  );
};

export default ContextMenuOptions;
