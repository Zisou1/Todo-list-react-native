import React from "react";
import { View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import AppNavigation from "./src/navigation/Navigation";
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}
