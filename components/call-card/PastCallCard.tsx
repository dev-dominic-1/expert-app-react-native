import React from "react";
import Call from "../../core/models/Call";
import { View, Text } from "react-native";
import { colors, fonts } from "../../core/styles/Global.styles";
import HostImageAlt from "./host-image/HostImageAlt";
import { PillButton } from "../../core/components/pill-button/PillButton";
import { CrossPlatformElevation } from "../../core/styles/CrossPlatformElevation.styles";
import MomentWrapper from "../../core/models/api/MomentWrapper";

interface PastCallCardProps {
  callDetails: Call;
  onPress: Function;
}
const PastCallCard = (props: PastCallCardProps) => {
  const { title, callDetails, expert } = props.callDetails;

  return (
    <View
      style={{
        backgroundColor: colors.cardColor,
        width: "100%",
        overflow: "hidden",
        flexDirection: "column",
        gap: 8,
        padding: 16,
        borderRadius: 12,
        ...CrossPlatformElevation(4),
      }}
    >
      <View style={{ flexDirection: "row", gap: 16 }}>
        <HostImageAlt photoUrl={expert?.photoUrl.LARGE} />
        <View
          style={{
            flexDirection: "column",
            height: 85,
            justifyContent: "space-around",
          }}
        >
          <Text style={{ ...fonts().h5, fontSize: 16 }}>{expert?.name}</Text>
          <Text style={fonts().h7}>"{title}"</Text>
          <Text
            style={fonts().h7}
          >{`${MomentWrapper.dateFormatShort(callDetails?.date ?? "")}, ${MomentWrapper.timeFormat(callDetails?.time ?? "")}`}</Text>
        </View>
      </View>
      <PillButton
        title="Call Details"
        onPress={() => props.onPress()}
        variant="outlined"
        style={{
          button: CrossPlatformElevation(0),
          text: { fontSize: 16 },
        }}
      />
    </View>
  );
};

export default PastCallCard;
