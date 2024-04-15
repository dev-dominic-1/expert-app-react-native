import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { fonts } from "../../core/styles/Global.styles";
import FindExpertTextInput from "./find-expert-text-input/FindExpertTextInput";
import WelcomeMessage from "./welcome-message/WelcomeMessage";
import { Feather } from "@expo/vector-icons";
import UpcomingCallCard from "../call-card/UpcomingCallCard";
import PastCallCard from "../call-card/PastCallCard";
import { upcomingCalls, pastCalls } from "../../core/models/tempData/CallData";

export const Home = (props: { navigation: NavigationProp<any> }) => {
  const sectionStyle: ViewStyle = {
    gap: 12,
    alignItems: "center",
    width: "100%",
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        paddingTop: 20,
        paddingHorizontal: 16,
      }}
    >
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
      <View style={sectionStyle}>
        {upcomingCalls.map((call, index) => (
          <UpcomingCallCard
            key={`upcoming-call-${index}`}
            callDetails={call}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Text style={fonts().h4}>Previous Calls</Text>
      </View>
      <View style={sectionStyle}>
        {pastCalls.map((call, index) => (
          <PastCallCard
            key={`past-call-${index}`}
            callDetails={call}
          />
        ))}
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
};
