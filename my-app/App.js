import { Image, StyleSheet, Button, Text } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import MessageScreen from "./app/screens/MessageScreen";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    // <GestureHandlerRootView>

    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
    // </GestureHandlerRootView>
    // <GestureHandlerRootView>
    //   <ListingEditScreen />
    // </GestureHandlerRootView>
    <GestureHandlerRootView>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
