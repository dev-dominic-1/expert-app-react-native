import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { colors } from "../../core/styles/Global.styles";
import RandomUserMe from "../../core/models/api/RandomUser.me";
import { CrossPlatformElevation } from "../../core/styles/CrossPlatformElevation.styles";

interface HostPhotoProps {
  photoUrl?: string;
}
const HostImageAlt2 = (props: HostPhotoProps) => {
  return (
    <View
      style={{
        position: "relative",
        height: 78,
        width: 78,
        borderRadius: 999,
        ...CrossPlatformElevation(),
      }}
    >
      <Image
        source={{ uri: props.photoUrl }}
        style={{ height: "100%", width: "100%", borderRadius: 999 }}
      />
      <View
        style={{
          borderRadius: 999,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: colors.primaryDark,
          transform: [{ translateX: 4 }, { translateY: 4 }],
          zIndex: -1,
          ...CrossPlatformElevation(),
        }}
      ></View>
    </View>
  );
};

export default HostImageAlt2;
