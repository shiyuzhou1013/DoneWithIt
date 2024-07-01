import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image, StyleSheet, Button, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    try {
      const user = await authStorage.getUser();
      if (user) setUser(user);
    } catch (error) {
      console.error("Error restoring user", error);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    // <GestureHandlerRootView>

    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
    // </GestureHandlerRootView>
    // <GestureHandlerRootView>
    //   <ListingEditScreen />
    // </GestureHandlerRootView>
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView>
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
