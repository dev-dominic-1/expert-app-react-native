import React from "react";
import { Text } from "react-native";
import { PillButton } from "../../core/components/pill-button/PillButton";
import ComfortView from "../../core/components/views/ComfortView";
import { NavigationProp } from "@react-navigation/native";
import { goTo } from "../../core/navigation/Navigator";

export const Home = (props: { navigation: NavigationProp<any> }) => {
  return (
    <ComfortView
      style={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <Text>Home</Text>
      <PillButton
        title="Profile"
        onPress={() => goTo(props.navigation, "Profile", true)}
        variant="outlined"
        style={{ button: { marginHorizontal: 10 } }}
      />
    </ComfortView>
  );
};
