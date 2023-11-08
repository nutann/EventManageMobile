import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import { StackTypes } from "../../routes";
import { useNavigation } from "@react-navigation/native";


const styles = SignInStyles;

export function SignIn() {


  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Welcome to My Event Manager</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Enter an email" style={styles.input} placeholderTextColor="#FFFFFF"/>
        <Text style={styles.title}>Password</Text>
        <TextInput placeholder="Your password" style={styles.input} placeholderTextColor="#FFFFFF" />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Login")}
          >
           SignIn 

          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text
            style={styles.registerButtonText}
            onPress={() => navigation.navigate("AppCode")}
          >
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
