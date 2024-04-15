import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import Call from "../../core/models/Call";
import { colors, fonts } from "../../core/styles/Global.styles";
import RandomUserMe from "../../core/models/api/RandomUser.me";
import HostImage from "./host-image/HostImage";
import { CrossPlatformElevation } from "../../core/styles/CrossPlatformElevation.styles";
import { Feather } from "@expo/vector-icons";
import { PillButton } from "../../core/components/pill-button/PillButton";

interface CallCardProps {
  callDetails: Call;
  onPress: Function;
}
const UpcomingCallCard = (props: CallCardProps) => {
  const { title, timestamp, hostName } = props.callDetails;

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: colors.cardColor,
        borderRadius: 12,
        width: "100%",
        flexDirection: "column",
        gap: 8,
        ...CrossPlatformElevation(4),
      }}
    >
      <View style={{ flexDirection: "row", gap: 16 }}>
        <HostImage />
        <View
          style={{
            flexDirection: "column",
            height: 85,
            justifyContent: "space-around",
          }}
        >
          <Text style={{ ...fonts().h5, fontSize: 16 }}>{title}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Feather
              name="clock"
              size={14}
            />
            <Text style={fonts().h7}>{timestamp}</Text>
          </View>
          <Text style={fonts().h7}>{hostName}</Text>
        </View>
      </View>
      <PillButton
        title="Call Details"
        onPress={() => props.onPress()}
        variant={"filled"}
      />
    </View>
  );
};

export default UpcomingCallCard;
