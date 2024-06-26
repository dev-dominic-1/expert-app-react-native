import React, { useEffect } from "react";
import { Image, View } from "react-native";
import RandomUserMe from "../../../core/models/api/RandomUser.me";

interface HostImageAltProps {
  photoUrl?: string;
}
const HostImageAlt = (props: HostImageAltProps) => {
  return (
    <View style={{ position: "relative", height: 93, width: 93 }}>
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          borderRadius: 999,
        }}
      />
      <Image
        source={{ uri: props.photoUrl }}
        style={{
          height: 121,
          width: 121,
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: 999,
          transform: [{ translateX: -30 }, { translateY: -30 }],
        }}
      />
    </View>
  );
};

export default HostImageAlt;
