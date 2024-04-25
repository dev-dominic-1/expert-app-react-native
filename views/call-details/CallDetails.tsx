import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { fonts } from "../../core/styles/Global.styles";
import { PillButton } from "../../core/components/pill-button/PillButton";
import Call from "../../core/models/Call";
import MomentWrapper from "../../core/models/api/MomentWrapper";
import RatingStars from "../../components/rating-stars/RatingStars";
import { goTo } from "../../core/navigation/Navigator";
import EditReview from "./edit-review/EditReview";
import GlobalContext from "../../core/global-context/GlobalContext";
import CallDetailHeader from "../supporting-components/call-detail-header/CallDetailHeader";
import {
  CallDetailsContext,
  defaultCallDetailsState,
} from "./CallDetails.context";

interface CallDetailsProps {
  navigation: any;
  route: any;
}
const CallDetails = (props: CallDetailsProps) => {
  const { params } = props.route;
  const call: Call = params?.call ?? {};

  if (!call) return;
  const { expert, callDetails } = call;

  const [openEditReview, setOpenEditReview] = React.useState(false);

  const context = React.useContext(GlobalContext);

  const {
    card: cardStyle,
    section: sectionStyle,
    sectionLabel,
    cardContent,
  } = defaultCallDetailsState.style;

  return (
    <CallDetailsContext.Provider value={defaultCallDetailsState}>
      <View>
        <EditReview
          expert={expert}
          callDetails={callDetails}
          open={openEditReview}
          onPressClose={() => setOpenEditReview(false)}
        />
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <CallDetailHeader expert={call.expert} />
          <View style={sectionStyle}>
            <Text style={sectionLabel}>Call Date and Time</Text>
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
            <Text style={sectionLabel}>Your Question</Text>
            <View style={cardStyle}>
              <Text style={sectionLabel}>{callDetails?.questionTitle}</Text>
              <Text style={cardContent}>{callDetails?.question}</Text>
            </View>
          </View>
          {!!callDetails?.rating ? (
            <View style={sectionStyle}>
              <Text style={sectionLabel}>Review</Text>
              <View style={cardStyle}>
                <RatingStars
                  rating={
                    context.callDetails?.[callDetails?.id ?? -1]?.rating ?? 5
                  }
                />
                {callDetails?.review ? (
                  <Text style={cardContent}>{callDetails?.review}</Text>
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
                {!!callDetails?.review || !!callDetails?.rating ? (
                  <PillButton
                    title="Edit Review"
                    onPress={() => setOpenEditReview(true)}
                    variant={"outlined"}
                    style={{ text: { paddingHorizontal: 0 } }}
                  />
                ) : (
                  <PillButton
                    title="Add Review"
                    onPress={() => setOpenEditReview(true)}
                    variant="outlined"
                    style={{ text: { paddingHorizontal: 0 } }}
                  />
                )}
              </View>
              <View style={{ paddingLeft: 8, width: "50%" }}>
                <PillButton
                  title="Ask a Follow Up"
                  onPress={() =>
                    goTo(props.navigation, "Follow Up", false, { call })
                  }
                  variant={"filled"}
                  style={{ text: { paddingHorizontal: 0 } }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </CallDetailsContext.Provider>
  );
};

export default CallDetails;
