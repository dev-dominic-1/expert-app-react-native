import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { colors, fonts } from "../../core/styles/Global.styles";
import FindExpertTextInput from "./find-expert-text-input/FindExpertTextInput";
import WelcomeMessage from "./welcome-message/WelcomeMessage";
import { Feather } from "@expo/vector-icons";
import UpcomingCallCard from "../../components/call-card/UpcomingCallCard";
import {
  upcomingCalls,
  upcomingGroupCalls,
} from "../../core/models/tempData/CallData";
import GroupCallAd from "../../components/group-call-ad/GroupCallAd";
import { goTo } from "../../core/navigation/Navigator";
import Call from "../../core/models/Call";

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
            onPress={() => {
              goTo(props.navigation, "My Calls");
            }}
          >
            <Text style={{ ...fonts().body2, fontSize: 16 }}>All Calls</Text>
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
            onPress={() =>
              goTo(props.navigation, "Call Details", false, { call })
            }
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
        <Text style={fonts().h4}>Upcoming Group Calls for You</Text>
      </View>
      <View style={sectionStyle}>
        <View style={{ flex: 2, gap: 24, width: "100%" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%", paddingRight: 12 }}>
              <GroupCallAd callDetails={upcomingGroupCalls[0]} />
            </View>
            <View style={{ width: "50%", paddingLeft: 12 }}>
              <GroupCallAd callDetails={upcomingGroupCalls[1]} />
            </View>
          </View>
        </View>
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
};
