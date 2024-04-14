import React, { useEffect } from "react";
import RandomUserMe from "../../../core/models/api/RandomUser.me";
import { Image, View } from "react-native";
import { colors } from "../../../core/styles/Global.styles";

interface HostImageProps {}
const HostImage = (props: HostImageProps) => {
  const [image, setImage] = React.useState<string>();
  const pullImage = (): void => {
    RandomUserMe.getLarge()
      .then((r) => setImage(r))
      .catch(() => pullImage());
  };
  useEffect(() => {
    pullImage();
  }, []);

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 93,
          width: 93,
          borderRadius: 999,
        }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: -1,
          borderRadius: 999,
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          transform: [{ translateX: 2 }, { translateY: 2 }],
          backgroundColor: colors.primaryDark,
        }}
      />
    </View>
  );
};

export default HostImage;
