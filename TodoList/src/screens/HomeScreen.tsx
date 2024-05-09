import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 5,
    overflow: "hidden", // Ensure the border radius is applied
  },
});

export default HomeScreen;
