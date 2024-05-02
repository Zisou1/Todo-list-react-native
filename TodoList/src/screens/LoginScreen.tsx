import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C293A",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#FFFFFF",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    marginRight: 10,
    color: "#FFFFFF",
  },
  input: {
    backgroundColor: "#FFF",
    width: "80%",
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
    color: "#000",
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: "#0096FB",
    width: "80%",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  loginText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: "#FFF",
  },
});

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const goToRegisterScreen = () => {
    navigation.navigate("Register" as never); // Type assertion
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome !</Text>
      <View style={styles.logoContainer}>
        <Icon name="user" size={24} style={styles.logoIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#7f8c8d"
        />
      </View>
      <View style={styles.logoContainer}>
        <Icon name="lock" size={24} style={styles.logoIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7f8c8d"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToRegisterScreen}>
        <Text style={styles.registerText}>
          Don't have an account? Register here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
