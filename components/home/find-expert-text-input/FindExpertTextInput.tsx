import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../core/styles/Global.styles";
import { CrossPlatformElevation } from "../../../core/styles/CrossPlatformElevation.styles";

interface FindExpertTextInputProps {
  onPressSearch: Function;
}

const FindExpertTextInput = (props: FindExpertTextInputProps) => {
  const ICON_SIZE: number = 24;
  const ICON_COLOR: string = "black";
  const BACKGROUND_COLOR: string = colors.cardColorDark;

  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: BACKGROUND_COLOR,
        paddingVertical: 12,
        paddingHorizontal: 24,
        gap: 12,
        borderRadius: 999,
      }}
    >
      <TextInput
        placeholder="What topic do you need help with?"
        style={{ flex: 1 }}
        value={search}
        onChangeText={setSearch}
      />
      <TouchableOpacity onPress={() => props.onPressSearch()}>
        <Feather
          name="search"
          size={ICON_SIZE}
          color={ICON_COLOR}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FindExpertTextInput;
