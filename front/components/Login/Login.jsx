


    import styles from "./login.style"
    import React, { useState } from 'react';
    import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
    
    // Functional component for the login page
    const Login = () => {
      // State to manage the username and password input
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
      // Function to handle the login button press
      const handleLogin = () => {
        // Implement your login logic here
        // For now, let's just log the credentials
        console.log('Username:', username);
        console.log('Password:', password);
      };
    
      return (
        <View >
          <Text style={styles.title}>Welcome to Your App</Text>
    
          {/* Input fields for username and password */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
    
          {/* Login button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      );
    };

    export default Login;
