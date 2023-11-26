import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Login from './components/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up .js to start working on your app! </Text>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

