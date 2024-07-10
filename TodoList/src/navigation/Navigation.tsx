import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setUserid, selectUserId } from '../redux/slices/Credentials';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const dispatch = useDispatch();
  const credentials = useSelector(selectUserId);
  const [initialRoute, setInitialRoute] = useState('LoginScreen');

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        dispatch(setUserid(parsedUser.uid));
        setInitialRoute('HomeScreen');
      } else {
        setInitialRoute('LoginScreen');
      }
    };

    checkUser();

    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        console.log(user.uid);
        dispatch(setUserid(user.uid));
      } else {
        dispatch(setUserid(null)); // Handle the case when there is no user logged in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [dispatch]);

  if (initialRoute === 'LoginScreen' && credentials) {
    setInitialRoute('HomeScreen');
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        {credentials ? (
          <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
