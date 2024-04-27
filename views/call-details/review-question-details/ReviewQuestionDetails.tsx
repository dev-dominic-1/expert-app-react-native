import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Call from "../../../core/models/Call";
import { CallDetailsContext } from "../CallDetails.context";
import CallDetailHeader from "../../supporting-components/call-detail-header/CallDetailHeader";
import { colors, fonts } from "../../../core/styles/Global.styles";
import { CrossPlatformElevation } from "../../../core/styles/CrossPlatformElevation.styles";
import GlobalContext from "../../../core/global-context/GlobalContext";
import { Feather } from "@expo/vector-icons";

interface FollowUpPaymentProps {
  navigation: any;
  route: any;
}
const ReviewQuestionDetails = (props: FollowUpPaymentProps) => {
  const { params } = props.route;
  const call: Call = params.call;
  const followUp: string = params.followUp ?? "";
  if (!call || !followUp) return;

  const globalContext = React.useContext(GlobalContext);
  const context = React.useContext(CallDetailsContext);
  const {
    card: cardStyle,
    section: sectionStyle,
    sectionLabel,
    cardContent,
  } = context.style;

  const paymentInfoCardStyle: {
    card: ViewStyle;
    text: {
      regular: TextStyle;
      light: TextStyle;
      medium: TextStyle;
    };
  } = {
    card: {
      backgroundColor: colors.background,
      borderRadius: 12,
      padding: 11,
      overflow: "hidden",
      ...CrossPlatformElevation(0),
    },
    text: {
      regular: fonts().h6,
      light: fonts().body3,
      medium: { ...fonts().h5, fontSize: 16 },
    },
  };

  const subtotal: string = globalContext.functions.combineFees(
    globalContext.fees.followUpQuestion,
    call.expert?.fees.followUpQuestion ?? 0,
  );

  const [taxAmount, total] = globalContext.functions.taxSubtotal(subtotal);

  const ExpandComponent = (props: { onPress: () => void }) => {
    return (
      <Pressable
        onPress={() => props.onPress()}
        style={{
          position: "absolute",
          height: 40,
          width: 40,
          top: -9,
          right: -9,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather
          name="chevron-down"
          size={24}
          color="#313131"
        />
      </Pressable>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingHorizontal: 16 }}
    >
      <CallDetailHeader expert={call.expert} />
      <View style={sectionStyle}>
        <Text style={sectionLabel}>Your Initial Question</Text>
        <View style={cardStyle}>
          <Text style={sectionLabel}>{call.callDetails?.questionTitle}</Text>
          <Text style={cardContent}>{call.callDetails?.question}</Text>
        </View>
      </View>
      <View style={sectionStyle}>
        <Text style={sectionLabel}>Your Follow Up Question</Text>
        <View style={cardStyle}>
          <Text style={{ ...cardContent, paddingTop: 0 }}>{followUp}</Text>
        </View>
      </View>
      <View style={sectionStyle}>
        <Text style={sectionLabel}>Your Payment Information</Text>
        <View style={{ ...cardStyle, padding: 8, gap: 8 }}>
          <View style={paymentInfoCardStyle.card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Text style={paymentInfoCardStyle.text.regular}>
                Follow Up Question
              </Text>
              <Text
                style={{ ...paymentInfoCardStyle.text.light, paddingRight: 40 }}
              >
                {subtotal}
              </Text>
              <ExpandComponent onPress={() => {}} />
            </View>
          </View>
          <View style={paymentInfoCardStyle.card}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  ...paymentInfoCardStyle.text.regular,
                  paddingRight: 40,
                }}
              >
                MasterCard ending in 1028
              </Text>
              <ExpandComponent onPress={() => {}} />
            </View>
            <View
              style={{
                width: 999,
                height: 1,
                backgroundColor: colors.secondary,
                marginVertical: 8,
                marginLeft: -12,
              }}
            />
            <View
              style={{
                flexDirection: "column",
                gap: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={paymentInfoCardStyle.text.regular}>Subtotal</Text>
                <Text style={paymentInfoCardStyle.text.light}>{subtotal}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={paymentInfoCardStyle.text.regular}>Tax</Text>
                <Text style={paymentInfoCardStyle.text.light}>{taxAmount}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={paymentInfoCardStyle.text.medium}>Total</Text>
                <Text style={paymentInfoCardStyle.text.medium}>{total}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
};

export default ReviewQuestionDetails;
