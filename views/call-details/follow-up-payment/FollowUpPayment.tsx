import React from "react";
import { ScrollView, Text } from "react-native";
import Call from "../../../core/models/Call";

interface FollowUpPaymentProps {
  navigation: any;
  route: any;
}
const FollowUpPayment = (props: FollowUpPaymentProps) => {
  const { params } = props.route;
  const call: Call = params.call;
  if (!call) return;

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingHorizontal: 16 }}
    >
      <Text>FOLLOW UP PAYMENT</Text>
    </ScrollView>
  );
};

export default FollowUpPayment;
