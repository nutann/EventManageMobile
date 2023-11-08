import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { WelcomeStyles } from "./styles";

export function Welcome() {
  const navigation = useNavigation<StackTypes>();

  const styles = WelcomeStyles;
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          source={require("../../assets/logo.jpeg")}
          style={{ width: "100%" }}
          resizeMode="contain"
          animation="flipInY"
        />
      </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  );
}
