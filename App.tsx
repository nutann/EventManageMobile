import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ef2d3d" barStyle="light-content" />
      <Routes />
      </NavigationContainer>
  );
}
