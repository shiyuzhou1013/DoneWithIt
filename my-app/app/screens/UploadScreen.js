import React, { useState, useEffect } from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

function UploadScreen({ visible }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (visible) {
      setProgress(0);
      animateProgress();
    } else {
      setProgress(0);
    }
  }, [visible]);

  const animateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= 1) {
        clearInterval(interval);
      } else {
        currentProgress += 0.03;
        setProgress(currentProgress);
      }
    }, 5);
  };

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          progress={progress}
          color={colors.primary}
          width={200}
          animated={true}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
