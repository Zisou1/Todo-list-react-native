import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { setUserid } from '../redux/slices/Credentials';

const HomeScreen = () => {
  const dispatch=useDispatch()
  const logout = async () => {
    try {
      // Sign out from Firebase
      await auth().signOut();
  
      // Sign out from Google
      await GoogleSignin.signOut();
  
      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem('user');
  
      // Clear user ID in Redux store
      dispatch(setUserid(null));
  
      // Navigate to Login screen
      
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={logout} />
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
