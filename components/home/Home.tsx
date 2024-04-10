import React from "react";
import {Button, View} from "react-native";

// @ts-ignore
export const Home = (props: { navigation: any }) => {
  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Button title="Profile" onPress={() => {
        props.navigation.navigate("Profile");
      }} />
    </View>
  )
}