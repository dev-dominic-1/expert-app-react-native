import React from "react";
import { Text } from "react-native";
import { PillButton } from "../../core/components/pill-button/PillButton";
import ComfortView from "../../core/components/comfort-view/ComfortView";

export const Home = (props: { navigation: any }) => {
  return (
    <ComfortView
      style={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <Text>Home</Text>
      <PillButton
        title="Profile"
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
        variant="outlined"
        style={{ button: { marginHorizontal: 10 } }}
      />
    </ComfortView>
  );
};
