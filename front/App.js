// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Auth0Provider
      domain="dev-xhimeco72yx4icoh.us.auth0.com"
      clientId="jwZzDuh0huFmRRf2e3s1069dXZENI7cv"
      redirectUri="http://localhost:19006"
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
}



