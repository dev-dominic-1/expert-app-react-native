import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TitleBar from "./components/title-bar/TitleBar";
import { Platform, View } from "react-native";
import { navScreens } from "./core/navigation/NavScreens";
import ContextMenu from "./components/context-menu/ContextMenu";
import { useFonts } from "expo-font";
import { colors } from "./core/styles/Global.styles";
import NavHeader from "./core/navigation/NavHeader";
import GlobalContext, {
  AppState,
  defaultAppState,
} from "./core/global-context/GlobalContext";
import ModalUnderlay from "./core/components/modal-underlay/ModalUnderlay";

export default function App() {
  // We need to substitute font families for font weights on android
  if (Platform.OS === "android") {
    useFonts({
      "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });
  }
  const Stack = createNativeStackNavigator();

  const [openContextMenu, setOpenContextMenu] = React.useState(false);

  const [appState, setAppState] = React.useState<AppState>(defaultAppState);

  return (
    <SafeAreaProvider>
      <GlobalContext.Provider
        value={{
          ...appState,
          updateState: (newState?: Partial<AppState>) =>
            setAppState({ ...appState, ...newState }),
        }}
      >
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            {openContextMenu ? (
              <ContextMenu onPressOutside={() => setOpenContextMenu(false)} />
            ) : null}

            {appState.showModalUnderlay ? <ModalUnderlay /> : null}

            <TitleBar
              style={{ zIndex: 2 }}
              onPressContextMenu={() => setOpenContextMenu(true)}
            />

            <Stack.Navigator
              initialRouteName={"Home"}
              screenOptions={{
                contentStyle: { backgroundColor: colors.background },
              }}
            >
              {navScreens.map((s, i) => (
                <Stack.Screen
                  key={`app__nav-screen-${i}`}
                  name={s.name}
                  component={s.component as any}
                  options={{ header: NavHeader, headerShown: !!s.showNav }}
                />
              ))}
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </GlobalContext.Provider>
    </SafeAreaProvider>
  );
}
