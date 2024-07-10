import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { useDispatch } from "react-redux";
import HomeScreen from "./HomeScreen";
import { setUserid } from "../redux/slices/Credentials";

GoogleSignin.configure({
  webClientId:
    "38467005667-dagkdrd55bigrfothahi2ncai1epgns1.apps.googleusercontent.com",
  offlineAccess: true,
});

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        navigateToHome();
      }
    };

    checkUser();
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(googleCredential);

      // Get the UID of the logged-in user
      const uid = userCredential.user.uid;
      console.log(uid);
      dispatch(setUserid(uid));

      // Save user to AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify({ uid }));

      navigateToHome();

      return uid;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  const registerUser = async () => {
    try {
      const user = { username, password };
      await AsyncStorage.setItem("user", JSON.stringify(user));
      navigateToHome();
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const navigateToHome = () => {
    navigation.navigate("HomeScreen" as never); // Assuming "Home" is the name of your home screen
  };

  const goToRegisterScreen = () => {
    navigation.navigate("Register" as never); // Type assertion
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome !</Text>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={onGoogleButtonPress}
      >
        <Icon name="google" size={24} color="#0096FB" />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#7f8c8d"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7f8c8d"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={registerUser}>
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
