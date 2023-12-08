import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './login.style';

const Login = () => {


  return (
    <View>
      <Text style={styles.title}>Welcome to Your Todolist</Text>
      {/* Icons of the famous authentication methods */}
      <View style={styles.logoContainer}>
        <TouchableOpacity style={[styles.logoIcon]} >
          <Text>
            <Icon name="google" size={30} color="#4285F4" /> {/* Gmail */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.logoIcon]} >
          <Text>
            <Icon name="apple" size={30} color="#4285F4" /> {/* Apple */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.logoIcon]} >
          <Text>
            <Icon name="facebook" size={30} color="#4285F4" /> {/* Facebook */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.logoIcon]} >
          <Text>
            <Icon name="twitter" size={30} color="#4285F4" /> {/* Twitter */}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
