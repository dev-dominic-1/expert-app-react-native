import React from "react";
import {Button, View} from "react-native";

export const Profile = (props: { navigation: any }) => {
  return (
    <View>
      <Button title={"Home"} onPress={() => {
        props.navigation.navigate("Home");
      }} />
    </View>
  )
}