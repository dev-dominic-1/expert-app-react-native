import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import CallDetailHeader from "../../supporting-components/call-detail-header/CallDetailHeader";
import Call from "../../../core/models/Call";
import { CallDetailsContext } from "../CallDetails.context";
import { PillButton } from "../../../core/components/pill-button/PillButton";
import { goTo } from "../../../core/navigation/Navigator";

interface FollowUpProps {
  navigation: any;
  route: any;
}
const FollowUp = (props: FollowUpProps) => {
  const { params } = props.route;

  const call: Call = params.call ?? {};
  if (!call) return;

  const context = React.useContext(CallDetailsContext);
  const {
    card: cardStyle,
    section: sectionStyle,
    sectionLabel,
    cardContent,
  } = context.style;

  const [followUpQuestion, setFollowUpQuestion] = React.useState<string>("");

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingHorizontal: 16 }}
    >
      <CallDetailHeader expert={call.expert} />
      <View style={sectionStyle}>
        <Text style={sectionLabel}>Your Question</Text>
        <View style={cardStyle}>
          <Text style={sectionLabel}>{call.callDetails?.questionTitle}</Text>
          <Text style={cardContent}>{call.callDetails?.question}</Text>
        </View>
      </View>
      <View style={sectionStyle}>
        <Text style={sectionLabel}>Your Follow Up Question</Text>
        <View style={{ ...cardStyle, height: 150, backgroundColor: "#EAEAEA" }}>
          <TextInput
            value={followUpQuestion}
            style={{
              height: "100%",
              alignContent: "flex-start",
              verticalAlign: "top",
            }}
            placeholder="Write your question here"
            multiline
            onChangeText={(v) => setFollowUpQuestion(v)}
          />
        </View>
      </View>
      <View style={{ ...sectionStyle, alignItems: "flex-end", paddingTop: 48 }}>
        <PillButton
          disabled={!followUpQuestion}
          title="Next Step"
          onPress={() =>
            goTo(props.navigation, "Review Question Details", false, {
              call,
              followUp: followUpQuestion,
            })
          }
          variant="filled"
          style={{ button: { width: "50%" } }}
        />
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
};

export default FollowUp;
