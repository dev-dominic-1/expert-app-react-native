import React from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { PillButton } from "../../../core/components/pill-button/PillButton";
import { Feather } from "@expo/vector-icons";
import { colors, fonts } from "../../../core/styles/Global.styles";
import Call from "../../../core/models/Call";

interface PaymentConfirmationProps {
  navigation: any;
  route: any;
}
const PaymentConfirmation = (props: PaymentConfirmationProps) => {
  const { params } = props.route;
  const call: Call = params.call;
  if (!call) return;

  const { expert } = call;

  const goHome = () => props.navigation.popToTop();

  const imageSrc = () => {
    switch (Platform.OS) {
      case "android":
        return require("../../../assets/icons/payment-confirmation-custom.png");
      default:
        return require("../../../assets/icons/payment-confirmation-custom.svg");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between", padding: 16 }}>
      <View style={{ position: "relative", paddingTop: 40 }}>
        <TouchableOpacity
          onPress={goHome}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 40,
            width: 40,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather
            name="arrow-left"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 40,
          }}
        >
          <View style={{ position: "relative", width: 120, height: 120 }}>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: colors.cardColor,
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                height: 120,
                borderRadius: 999,
                zIndex: 2,
              }}
            >
              <Image
                source={imageSrc()}
                style={{ height: 71, width: 51 }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 11,
                left: 14,
                height: "100%",
                width: "100%",
                backgroundColor: colors.primaryDark,
                borderRadius: 999,
                zIndex: 1,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: 12,
            paddingTop: 36,
            alignItems: "center",
          }}
        >
          <Text style={{ ...fonts().h1, fontSize: 22 }}>
            Your question is submitted!
          </Text>
          <Text style={{ ...fonts().h6, textAlign: "center" }}>
            {expert?.name.split(" ")[0]} will get back to you in the next{" "}
            <Text style={{ ...fonts().h3, fontSize: 16 }}>48 Hours</Text>. Until
            then, sit back and relax!
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <PillButton
          title="Close"
          onPress={goHome}
          variant="filled"
          style={{ button: { width: "auto" } }}
        />
      </View>
    </View>
  );
};

export default PaymentConfirmation;
