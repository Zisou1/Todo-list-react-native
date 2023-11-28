import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {  Text, View } from 'react-native';
import Login from './components/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // You can adjust this based on your layout requirements
    alignItems: 'center',
    backgroundColor: '#C25E85', // Set the background color if needed
  },
});

