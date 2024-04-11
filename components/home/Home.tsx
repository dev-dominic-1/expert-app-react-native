import React from "react";
import {Button, View} from "react-native";
import {PillButton} from "../../core/components/pill-button/PillButton";

// @ts-ignore
export const Home = (props: { navigation: any }) => {
  return (
    <View style={{alignContent: 'center', justifyContent: 'center'}}>
      <PillButton title="Account" onPress={() => {
        props.navigation.navigate("Profile");
      }} styles={{button: { marginHorizontal: 10 }}} />
    </View>
  )
}