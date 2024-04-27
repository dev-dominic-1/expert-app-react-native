import { NavigationProp } from "@react-navigation/native";

export function goTo(
  nav: { navigate: Function; reset: Function; [key: string]: any },
  ref: string,
  resetStack?: boolean,
  props?: object,
) {
  if (resetStack) {
    nav.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
    if (ref !== "Home") nav.navigate(ref, props ?? {});
    console.log("NAV", nav);
  } else {
    nav.navigate(ref, props ?? {});
  }
}
