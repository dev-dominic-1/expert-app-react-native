import React, { useEffect } from "react";
import { View, Text, Image, ViewStyle } from "react-native";
import Call from "../../core/models/Call";
import { colors, fonts } from "../../core/styles/Global.styles";
import { CrossPlatformElevation } from "../../core/styles/CrossPlatformElevation.styles";
import MomentWrapper from "../../core/models/api/MomentWrapper";

interface GroupCallAdProps {
  callDetails: Call;
  style?: ViewStyle;
}
const GroupCallAd = (props: GroupCallAdProps) => {
  const { title, adImageUrl, callDetails, expert } = props.callDetails;

  return (
    <View
      style={{
        borderRadius: 12,
        height: 188,
        flexDirection: "column",
        backgroundColor: colors.primary,
        ...CrossPlatformElevation(),
        ...(props.style ?? {}),
      }}
    >
      <View
        style={{
          height: "60%",
          width: "100%",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <Image
          source={adImageUrl}
          style={{ borderRadius: 12, width: "100%" }}
        />
      </View>
      <View
        style={{
          padding: 8,
          height: "40%",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ ...fonts().h5, fontSize: 14 }}>{title}</Text>
        <Text style={fonts().subtitle1}>{expert?.name}</Text>
        <Text
          style={fonts().subtitle1}
        >{`${MomentWrapper.dateFormatCompact(callDetails?.date ?? "")} ${MomentWrapper.timeFormat(callDetails?.time ?? "")}`}</Text>
      </View>
    </View>
  );
};

export default GroupCallAd;
