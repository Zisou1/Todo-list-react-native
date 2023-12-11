
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
     
       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
       <Stack.Screen name="Home" component={HomePage}  />
       </Stack.Navigator>
    </NavigationContainer>
  );
}


