import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import ComfortView from "../../core/components/views/ComfortView";
import { NavigationProp } from "@react-navigation/native";
import { goTo } from "../../core/navigation/Navigator";
import { RoundedButton } from "../../core/components/rounded-button/RoundedButton";
import { fonts } from "../../core/styles/Global.styles";
import FindExpertTextInput from "./find-expert-text-input/FindExpertTextInput";
import WelcomeMessage from "./welcome-message/WelcomeMessage";
import { Feather } from "@expo/vector-icons";

export const Home = (props: { navigation: NavigationProp<any> }) => {
  const sectionStyle: ViewStyle = {
    gap: 12,
    alignItems: "center",
    width: "100%",
  };

  return (
    <ComfortView style={{ alignItems: "center", paddingTop: 20, gap: 24 }}>
      <View style={sectionStyle}>
        <Text style={fonts().h2}>Find an Expert</Text>
        <FindExpertTextInput onPressSearch={() => {}} />
        <WelcomeMessage name="Brianna" />
      </View>
      <View style={sectionStyle}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={fonts().h4}>Your Upcoming Calls</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {}}
          >
            <Text style={{ ...fonts().body3, fontWeight: "600" }}>
              All Calls
            </Text>
            <Feather
              name="chevron-right"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <RoundedButton
        title="Profile"
        onPress={() => goTo(props.navigation, "Profile", true)}
        variant="filled"
        style={{ button: { marginHorizontal: 10 } }}
      />
    </ComfortView>
  );
};
