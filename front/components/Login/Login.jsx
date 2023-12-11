import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // You can adjust this based on your layout requirements
    alignItems: 'center',
    backgroundColor: '#1C293A'
  },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 50,
      color:'#FFFFFF',
    },
    logoContainer:{
      flexDirection: 'row', // Use 'row' for a horizontal layout
    alignItems: 'center',
    },
    logoIcon: {
      marginRight: 50,
       
    },
    
  });
const Login = () => {

  const navigation = useNavigation();

  const handleIconPress = () => {
    // Navigate to the HomePage component
    navigation.navigate('Home'); // Replace 'HomePage' with the actual name of your HomePage component in the navigation stack
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Todolist</Text>
      {/* Icons of the famous authentication methods */}
      <View style={styles.logoContainer}>
        <TouchableOpacity style={[styles.logoIcon]} onPress={handleIconPress} >
          <Text>
            <Icon name="google" size={30} color="#4285F4" /> {/* Gmail */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.logoIcon]} onPress={handleIconPress}>
          <Text>
            <Icon name="apple" size={30} color="#4285F4" /> {/* Apple */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.logoIcon]} onPress={handleIconPress}>
          <Text>
            <Icon name="facebook" size={30} color="#4285F4" /> {/* Facebook */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.logoIcon]} onPress={handleIconPress}>
          <Text>
            <Icon name="twitter" size={30} color="#4285F4" /> {/* Twitter */}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

