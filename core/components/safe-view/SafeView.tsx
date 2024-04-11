import React from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {View, ViewStyle} from "react-native";

/**
 * @author Dominic Hiland
 */
interface SafeViewProps {
  style?: ViewStyle,
  children: JSX.Element,
}

/**
 * @author Dominic Hiland
 */
export const SafeView = (props: SafeViewProps) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{
      ...(props.style ?? {}),
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      {props.children}
    </View>
  )
}