import { NavigationProp } from "@react-navigation/native";

export function goTo(
  nav: { navigate: Function; [key: string]: any },
  ref: string,
  resetStack?: boolean,
  props?: object,
) {
  if (resetStack) {
    nav.reset({
      index: 0,
      routes: [{ name: ref }],
    });
  } else {
    nav.navigate(ref, props ?? {});
  }
}
