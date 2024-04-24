import React from "react";
import { Pressable, View } from "react-native";
import GlobalContext from "../../global-context/GlobalContext";

interface ModalUnderlayProps {
  onPress?: () => void;
  rejectPress?: boolean;
}
const ModalUnderlay = (props: ModalUnderlayProps) => {
  const context = React.useContext(GlobalContext);

  return (
    <Pressable
      onPress={() => {
        if (props.rejectPress) return;
        props.onPress?.();
        context.updateState({ showModalUnderlay: false });
      }}
      style={{
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.25)",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    />
  );
};

export default ModalUnderlay;
