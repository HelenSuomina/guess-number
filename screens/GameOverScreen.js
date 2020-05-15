import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import KeyButton from "../components/KeyButton";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>
        <Text style={styles.mark}>The Game is Over!</Text>
      </BodyText>
      <Image
        fadeDuration={1000}
        source={require("../assets/final2.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <BodyText>
        Number of rounds: <Text style={styles.mark}>{props.roundsNumber}</Text>
      </BodyText>
      <BodyText>
        The Number was: <Text style={styles.mark}>{props.userNumber}</Text>
      </BodyText>
      <KeyButton onExecution={props.onRestart}>NEW GAME</KeyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: 280,
    margin: 20,
    borderRadius: 20,
  },
  mark: {
    color: Colors.header,
  },
});

export default GameOverScreen;
