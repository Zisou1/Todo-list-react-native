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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
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
    marginTop: 15,
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
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "80%",
    borderRadius: 5,
    padding: 15,
    marginBottom: 30,
    justifyContent: "center",
  },
  googleButtonText: {
    color: "#000",
    marginLeft: 10,
    fontSize: 16,
  },
  divider: {
    backgroundColor: "#7f8c8d",
    height: 1,
    width: "80%",
    marginBottom: 30,
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
      <TouchableOpacity style={styles.googleButton}>
        <Icon name="google" size={24} color="#0096FB" />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#7f8c8d"
        />
      </View>
      <View style={styles.logoContainer}>
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
