import React from "react";
import { View, Text, ScrollView, ViewStyle } from "react-native";
import { fonts } from "../../core/styles/Global.styles";
import { pastCalls, upcomingCalls } from "../../core/models/tempData/CallData";
import UpcomingCallCard from "../../components/call-card/UpcomingCallCard";
import PastCallCard from "../../components/call-card/PastCallCard";
import { goTo } from "../../core/navigation/Navigator";

interface AllCallsProps {
  navigation: any;
}

const MyCalls = (props: AllCallsProps) => {
  const sectionStyles: ViewStyle = {
    flexDirection: "column",
    gap: 12,
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        gap: 24,
        paddingHorizontal: 16,
        paddingTop: 8,
      }}
    >
      <View style={sectionStyles}>
        <Text style={fonts().h2}>Upcoming Calls</Text>
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
      <View style={sectionStyles}>
        <Text style={fonts().h2}>Previous Calls</Text>
        {pastCalls.map((call, index) => (
          <PastCallCard
            key={`past-call-${index}`}
            callDetails={call}
            onPress={() =>
              goTo(props.navigation, "Call Details", false, { call })
            }
          />
        ))}
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
};

export default MyCalls;
