import { Image, StyleSheet, Button } from "react-native";
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

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    // <GestureHandlerRootView>
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
    // </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
