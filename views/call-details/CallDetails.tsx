import React from "react";
import { View, Text, ScrollView } from "react-native";
import { colors, fonts } from "../../core/styles/Global.styles";
import { PillButton } from "../../core/components/pill-button/PillButton";
import HostImageAlt2 from "./HostImageAlt2";
import Call from "../../core/models/Call";

interface CallDetailsProps {
  navigation: any;
  route: any;
}
const CallDetails = (props: CallDetailsProps) => {
  const { params } = props.route;
  const call: Call = params?.call ?? {};

  if (!call) return;

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
        <View style={{ flexDirection: "row", width: "80%", gap: 24 }}>
          <HostImageAlt2 photoUrl={call.expert?.photoUrl.LARGE} />
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={{ ...fonts().h5, fontSize: 16, lineHeight: 24 }}>
              {call.expert?.name}
            </Text>
            <Text>BIO</Text>
          </View>
        </View>
        <Text>{call.expert?.name}</Text>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingRight: 8, width: "50%" }}>
              <PillButton
                title="Edit Review"
                onPress={() => {}}
                variant={"outlined"}
              />
            </View>
            <View style={{ paddingLeft: 8, width: "50%" }}>
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
