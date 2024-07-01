import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
        style={{
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
