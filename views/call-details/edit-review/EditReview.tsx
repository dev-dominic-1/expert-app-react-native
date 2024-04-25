import React, { useEffect } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, fonts } from "../../../core/styles/Global.styles";
import { CrossPlatformElevation } from "../../../core/styles/CrossPlatformElevation.styles";
import { Feather } from "@expo/vector-icons";
import Expert from "../../../core/models/Expert";
import RatingStars from "../../../components/rating-stars/RatingStars";
import CallDetails from "../../../core/models/CallDetails";
import { PillButton } from "../../../core/components/pill-button/PillButton";
import GlobalContext from "../../../core/global-context/GlobalContext";
import { dishCallDetails } from "../../../core/models/tempData/CallDetailsData";

interface EditReviewProps {
  expert?: Expert;
  callDetails?: CallDetails;
  open?: boolean;
  onPressClose: Function;
}
const EditReview = (props: EditReviewProps) => {
  let context = React.useContext(GlobalContext);

  const { callDetails, expert } = props;

  const [starRating, setStarRating] = React.useState<number>(
    context.callDetails?.[callDetails?.id ?? -1]?.rating ?? 5,
  );
  const [review, setReview] = React.useState<string>(
    context.callDetails?.[callDetails?.id ?? -1]?.review ?? "",
  );

  useEffect(() => {
    context.updateState({ showModalUnderlay: props.open });
  }, [props.open]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        visible={props.open}
        transparent={true}
        animationType="slide"
        onRequestClose={() => props.onPressClose()}
      >
        <Pressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
          onPress={() => props.onPressClose()}
        >
          <Pressable
            style={{
              position: "relative",
              width: Dimensions.get("window").width - 32,
              backgroundColor: colors.cardColor,
              paddingBottom: 24,
              paddingTop: 44,
              paddingHorizontal: 16,
              borderRadius: 30,
              ...CrossPlatformElevation(),
            }}
            onPress={() => {}} // Override underlay Pressable
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 12,
                right: 16,
                padding: 12,
                zIndex: 1000,
              }}
              onPress={() => props.onPressClose()}
            >
              <Feather
                name="x"
                size={24}
                color={colors.primaryDark}
              />
            </TouchableOpacity>
            <Text>{}</Text>
            <View style={{ width: "100%", paddingBottom: 24 }}>
              <Text style={{ ...fonts().h1, textAlign: "center" }}>
                Call Complete!
              </Text>
            </View>
            <View style={{ flexDirection: "column", paddingBottom: 24 }}>
              <Text style={{ ...fonts().h5, fontSize: 16 }}>
                How did {props.expert?.name.split(" ")[0]} do?
              </Text>
              <RatingStars
                rating={starRating}
                onPressStar={(v) => setStarRating(v)}
                uniqueKey="edit-review"
              />
            </View>
            <View style={{ paddingBottom: 24 }}>
              <Text style={{ ...fonts().h5, fontSize: 16, paddingBottom: 8 }}>
                Add a Comment (Optional)
              </Text>
              <View
                style={{
                  backgroundColor: colors.background,
                  height: 150,
                  width: "100%",
                  borderRadius: 10,
                  padding: 10,
                  ...CrossPlatformElevation(),
                }}
              >
                <TextInput
                  value={review}
                  multiline={true}
                  onChangeText={(v) => setReview(v)}
                  placeholder="Write a bit about your experience"
                />
              </View>
            </View>
            <PillButton
              title="Submit Review"
              onPress={() => {
                if (!props.callDetails) return;
                dishCallDetails(props.callDetails?.id, (v: CallDetails) => {
                  v.review = review;
                  v.rating = starRating;
                  context.updateState({
                    callDetails: { ...context.callDetails, [v.id]: v },
                    showModalUnderlay: !context.showModalUnderlay,
                  });
                  props.onPressClose();
                  return v;
                });
              }}
              variant="filled"
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default EditReview;
