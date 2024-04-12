import React, { ReactNode, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { fonts } from "../../core/styles/Global.styles";
import { useNavigation } from "@react-navigation/native";
import { goTo } from "../../core/navigation/Navigator";

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
    fetch("https://randomuser.me/api/").then(async (res) => {
      const { results } = await res.json();
      setImage(results[0].picture.medium);
    });
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
                height: 32,
                width: 32,
                borderRadius: 999,
              }}
              source={{ uri: image }}
              alt="Profile"
            />
          )}
        </View>
        <Text style={fonts().h3}>{props.label}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ContextMenuOption;
