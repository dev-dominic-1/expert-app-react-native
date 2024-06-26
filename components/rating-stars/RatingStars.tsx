import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../core/styles/Global.styles";

interface RatingStarsProps {
  rating: number;
  onPressStar?: (v: number) => void;
  uniqueKey?: string;
}
const RatingStars = (props: RatingStarsProps) => {
  const getStarIcon = (
    selected: boolean,
    index: number,
    clickEnabled?: boolean,
    uniqueKey?: string,
  ) => {
    const star = (
      <View
        key={`rating-star-${index}${uniqueKey ? `-${uniqueKey}` : ""}`}
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Octicons
          name="star-fill"
          size={32}
          color={selected ? colors.primaryDark : colors.primary}
        />
      </View>
    );
    if (!!clickEnabled) {
      return (
        <TouchableWithoutFeedback
          onPress={() => props.onPressStar?.(index + 1)}
        >
          {star}
        </TouchableWithoutFeedback>
      );
    }
    return star;
  };

  const starsContent = (rating: number): JSX.Element[] => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      result.push(getStarIcon(false, i, !!props.onPressStar, props.uniqueKey));
    }
    for (let i = 0; i < rating; i++) {
      result[i] = getStarIcon(true, i, !!props.onPressStar, props.uniqueKey);
    }
    return result;
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingVertical: 8,
      }}
    >
      {starsContent(props.rating)}
    </View>
  );
};

export default RatingStars;
