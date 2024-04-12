import React, {createElement, ReactNode} from "react";
import {View, ScrollView, ViewStyle} from "react-native";
import {colors} from "../../styles/Global.styles";

/**
 * @author Dominic Hiland
 */
interface ComfortViewProps {
  scrollable?: boolean
  children: ReactNode | ReactNode[];
  style?: ViewStyle
}

/**
 * @author Dominic Hiland
 */
const ComfortView = (props: ComfortViewProps) => {

  const root: (typeof View | typeof ScrollView) = props.scrollable ? ScrollView : View

  const style: ViewStyle = {
    ...{
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    } ,
    ...(props.style ?? {})
  }

  return (
    <>
      {createElement(root, {style}, props.children)}
    </>
  )
}

export default ComfortView;