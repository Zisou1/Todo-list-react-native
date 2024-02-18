// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false,}} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}



