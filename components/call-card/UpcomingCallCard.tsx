import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import Call from "../../core/models/Call";
import { colors, fonts } from "../../core/styles/Global.styles";
import HostImage from "./host-image/HostImage";
import { CrossPlatformElevation } from "../../core/styles/CrossPlatformElevation.styles";
import { Feather } from "@expo/vector-icons";
import { PillButton } from "../../core/components/pill-button/PillButton";
import MomentWrapper from "../../core/models/api/MomentWrapper";

interface CallCardProps {
  callDetails: Call;
  onPress: Function;
}
const UpcomingCallCard = (props: CallCardProps) => {
  const { title, callDetails, expert } = props.callDetails;

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
        <HostImage photoUrl={expert?.photoUrl.LARGE} />
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
            <Text
              style={fonts().h7}
            >{`${MomentWrapper.dateFormat(callDetails?.date ?? "")}, ${MomentWrapper.timeFormat(callDetails?.time ?? "")}`}</Text>
          </View>
          <Text style={fonts().h7}>{expert?.name}</Text>
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
