import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
// @ts-ignore
import DoMoreLogo from "../assets/DoMoreLogo.png";
// @ts-ignore
import IntroductionVector from "../assets/IntroductionVector.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleLeft} />
      <View style={styles.circleRight} />
      <Image source={DoMoreLogo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Build the best</Text>
        <Text style={[styles.text, styles.boldText]}>Version</Text>
        <Text style={styles.text}>of yourself</Text>
      </View>
      <Image source={IntroductionVector} style={styles.vector} />
      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const circleSize = 220; // Adjust the size of the circles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0096FB",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 150,
    position: "absolute",
    top: 50,
  },
  textContainer: {
    marginTop: 40,
    marginLeft: 45,
    alignItems: "flex-start",
    alignSelf: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  boldText: {
    fontWeight: "bold",
    color: "#1C293A",
  },
  vector: {
    width: 330,
    height: 280,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#1C293A",
    width: 280,
    height: 65,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 50, // Adjust this value to position the button vertically
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 30,
  },
  circleLeft: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: "#1C293A",
    position: "absolute",
    top: -30, // Adjust the positioning to overflow outside the screen
    left: -140, // Adjust the positioning to overflow outside the screen
  },
  circleRight: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: "#1C293A",
    position: "absolute",
    top: 100, // Adjust the positioning to overflow outside the screen
    right: -140, // Adjust the positioning to overflow outside the screen
  },
});

export default IntroScreen;
