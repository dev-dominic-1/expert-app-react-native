import React from "react";
import { View, Text, ScrollView, ViewStyle, Dimensions } from "react-native";
import { colors, fonts } from "../../core/styles/Global.styles";
import { PillButton } from "../../core/components/pill-button/PillButton";
import HostImageAlt2 from "./HostImageAlt2";
import Call from "../../core/models/Call";
import { CrossPlatformElevation } from "../../core/styles/CrossPlatformElevation.styles";
import MomentWrapper from "../../core/models/api/MomentWrapper";
import RatingStars from "../../components/rating-stars/RatingStars";
import { goTo } from "../../core/navigation/Navigator";

interface CallDetailsProps {
  navigation: any;
  route: any;
}
const CallDetails = (props: CallDetailsProps) => {
  const { params } = props.route;
  const call: Call = params?.call ?? {};

  if (!call) return;
  const { expert, callDetails } = call;

  const sectionStyle: ViewStyle = {
    paddingTop: 16,
    flexDirection: "column",
    gap: 8,
    width: "100%",
  };

  const cardStyle: ViewStyle = {
    padding: 16,
    backgroundColor: colors.cardColor,
    borderRadius: 12,
    ...CrossPlatformElevation(3),
  };

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
            <Text>{expert?.bio}</Text>
          </View>
        </View>
        <View style={{ height: 16 }} />
        <View style={sectionStyle}>
          <Text style={{ ...fonts().h5, fontSize: 16, textAlign: "left" }}>
            Call Date and Time
          </Text>
          <View style={{ ...cardStyle, gap: 8 }}>
            <Text style={{ ...fonts().h6 }}>
              {MomentWrapper.dateFormat(callDetails?.date ?? "")}
            </Text>
            <Text style={fonts().h6}>
              {MomentWrapper.timeFormat(callDetails?.time ?? "")}
            </Text>
          </View>
        </View>
        <View style={sectionStyle}>
          <Text style={{ ...fonts().h5, fontSize: 16, textAlign: "left" }}>
            Your Question
          </Text>
          <View style={cardStyle}>
            <Text style={{ ...fonts().h5, fontSize: 16, textAlign: "left" }}>
              {callDetails?.questionTitle}
            </Text>
            <Text style={{ ...fonts().h6, paddingTop: 8, lineHeight: 22 }}>
              {callDetails?.question}
            </Text>
          </View>
        </View>
        {!!callDetails?.rating ? (
          <View style={sectionStyle}>
            <Text style={{ ...fonts().h5, fontSize: 16, textAlign: "left" }}>
              Review
            </Text>
            <View style={cardStyle}>
              <RatingStars rating={4} />
              {callDetails?.review ? (
                <Text style={{ ...fonts().h6, lineHeight: 22, paddingTop: 8 }}>
                  {callDetails?.review}
                </Text>
              ) : null}
            </View>
          </View>
        ) : null}
        <View style={{ flex: 2, paddingTop: 24 }}>
          <View
            style={{
              flexDirection: "row",
              width: Dimensions.get("window").width - 32,
            }}
          >
            <View style={{ paddingRight: 8, width: "50%" }}>
              {!!callDetails?.review ? (
                <PillButton
                  title="Edit Review"
                  onPress={() => goTo(props.navigation, "Edit Review")}
                  variant={"outlined"}
                  style={{ text: { paddingHorizontal: 0 } }}
                />
              ) : (
                <PillButton
                  title="Add Review"
                  onPress={() => goTo(props.navigation, "Add Review")}
                  variant="outlined"
                  style={{ text: { paddingHorizontal: 0 } }}
                />
              )}
            </View>
            <View style={{ paddingLeft: 8, width: "50%" }}>
              <PillButton
                title="Ask a Follow Up"
                onPress={() => goTo(props.navigation, "Follow Up")}
                variant={"filled"}
                style={{ text: { paddingHorizontal: 0 } }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CallDetails;
