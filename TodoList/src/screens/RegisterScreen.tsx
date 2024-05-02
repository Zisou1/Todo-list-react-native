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

  input: {
    backgroundColor: "#FFF",
    width: "80%",
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
    color: "#000",
  },
  registerButton: {
    marginTop: 30,
    backgroundColor: "#0096FB",
    width: "80%",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  registerText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    marginTop: 20,
    color: "#FFF",
  },
});

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Now!</Text>
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
          placeholder="Email"
          placeholderTextColor="#7f8c8d"
          keyboardType="email-address"
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
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#7f8c8d"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLoginScreen}>
        <Text style={styles.loginText}>
          Already have an account? Login here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
