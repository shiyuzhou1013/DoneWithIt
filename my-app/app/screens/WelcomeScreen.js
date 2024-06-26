import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.taglin}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" />
        <Button title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  taglin: {
    fontSize: 25,
    fontWeight: 600,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
