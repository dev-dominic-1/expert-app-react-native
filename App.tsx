import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TitleBar from "./components/title-bar/TitleBar";
import { View } from "react-native";
import { navScreens } from "./core/navigation/NavScreens";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <TitleBar style={{ zIndex: 2 }} />
          <Stack.Navigator initialRouteName={"Home"}>
            {navScreens.map((s, i) => (
              <Stack.Screen
                key={`app__nav-screen-${i}`}
                name={s.name}
                component={s.component}
                options={{ headerShown: false }}
              />
            ))}
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
