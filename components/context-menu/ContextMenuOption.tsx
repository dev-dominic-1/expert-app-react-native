import React, { ReactNode, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../core/styles/Global.styles";
import { useNavigation } from "@react-navigation/native";
import { goTo } from "../../core/navigation/Navigator";
import RandomUserMe from "../../core/models/api/RandomUser.me";

interface ContextMenuOptionProps {
  icon?: ReactNode;
  imageSrc?: string;
  label: string;
  onPress: Function;
}
const ContextMenuOption = (props: ContextMenuOptionProps) => {
  const navigation = useNavigation();
  const { icon, imageSrc } = props;

  const [image, setImage] = React.useState<string | undefined>(undefined);
  useEffect(() => {
    if (!!icon) return; // Only pull an image if no icon was provided
    RandomUserMe.getSmall().then((r) => setImage(r));
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          goTo(navigation, "Profile");
          props.onPress();
        }}
        style={{
          flexDirection: "row",
          paddingVertical: 24,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "auto",
            paddingHorizontal: 36,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {!!icon ? (
            icon
          ) : (
            <Image
              style={{
                height: 24,
                width: 24,
                borderRadius: 999,
                borderWidth: 1,
                borderColor: "grey",
                transform: [{ scale: 1.25 }],
              }}
              source={{ uri: image }}
              alt="Profile"
            />
          )}
        </View>

        <Text style={{ ...fonts().h2, fontSize: 20 }}>{props.label}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ContextMenuOption;
