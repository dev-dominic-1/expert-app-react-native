import React from "react";
import Expert from "../../../core/models/Expert";
import { Text, View } from "react-native";
import HostImageAlt2 from "../../call-details/HostImageAlt2";
import { fonts } from "../../../core/styles/Global.styles";

interface CallDetailHeaderProps {
  expert?: Expert;
}
const CallDetailHeader = (props: CallDetailHeaderProps) => {
  const { expert } = props;
  return (
    <>
      <View style={{ flexDirection: "row", width: "80%", gap: 24 }}>
        <HostImageAlt2 photoUrl={expert?.photoUrl.LARGE} />
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={{ ...fonts().h5, fontSize: 16, lineHeight: 24 }}>
            {expert?.name}
          </Text>
          <Text>{expert?.bio}</Text>
        </View>
      </View>
      <View style={{ height: 16 }} />
    </>
  );
};

export default CallDetailHeader;
