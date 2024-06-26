import { StyleSheet } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import MessageScreen from "./app/screens/MessageScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
