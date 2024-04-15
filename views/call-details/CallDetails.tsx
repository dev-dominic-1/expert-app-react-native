import React from "react";
import { View, Text, ScrollView } from "react-native";
import { colors } from "../../core/styles/Global.styles";
import { PillButton } from "../../core/components/pill-button/PillButton";

interface CallDetailsProps {
  navigation: any;
  route: any;
}
const CallDetails = (props: CallDetailsProps) => {
  const { params } = props.route;
  const callDetails = params?.call ?? {};

  if (!callDetails) return;

  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <Text>Call Details</Text>
        <Text>{callDetails.hostName}</Text>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingRight: 8 }}>
              <PillButton
                title="Edit Review"
                onPress={() => {}}
                variant={"outlined"}
              />
            </View>
            <View style={{ paddingLeft: 8 }}>
              <PillButton
                title="Add Review"
                onPress={() => {}}
                variant={"filled"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CallDetails;
