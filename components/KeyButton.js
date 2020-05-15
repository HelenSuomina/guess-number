import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const KeyButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onExecution}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontFamily: "baloo2-medium",
    fontSize: 18,
  },
});

export default KeyButton;
