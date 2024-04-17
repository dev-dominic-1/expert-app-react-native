import React from "react";
import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../core/styles/Global.styles";

interface RatingStarsProps {
  rating: number;
}
const RatingStars = (props: RatingStarsProps) => {
  const getStarIcon = (selected: boolean, index: number) => {
    return (
      <View
        key={`rating-star-${index}`}
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Octicons
          name="star-fill"
          size={32}
          color={selected ? colors.primaryDark : colors.primary}
        />
      </View>
    );
  };

  const starsContent = (rating: number): JSX.Element[] => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      result.push(getStarIcon(false, i));
    }
    for (let i = 0; i < rating; i++) {
      result[i] = getStarIcon(true, i);
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
