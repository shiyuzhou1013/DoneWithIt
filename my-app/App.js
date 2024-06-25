import { View, StyleSheet } from "react-native";
import { useState } from "react";

import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    // <GestureHandlerRootView>
    //   <Screen>
    //     <AppPicker
    //       selectedItem={category}
    //       onSelectItem={(item) => setCategory(item)}
    //       items={categories}
    //       icon="apps"
    //       placeholder="Category"
    //     />
    //     <AppTextInput icon="email" placeholder="Email" />
    //   </Screen>
    // </GestureHandlerRootView>
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {},
});
