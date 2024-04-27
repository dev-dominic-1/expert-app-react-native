import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../styles/Global.styles";
import { Feather } from "@expo/vector-icons";

interface NavigationProps {
  navigation: any;
  route: any;
}
const NavHeader = (props: NavigationProps) => {
  console.log("NAV PROPS", props);
  props.navigation;
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={24}
          color={colors.primaryDark}
          style={{ padding: 12, margin: 4 }}
        />
      </TouchableOpacity>
      <Text style={fonts().h2}>{props.route.name}</Text>
    </View>
  );
};

export default NavHeader;
