import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import MaskInput, { Masks } from "react-native-mask-input";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";

export function AppCode() {
  const styles = SignInStyles;
  const [hidePass, setHidePass] = useState(true);
  const [phoneNumber, setPhoneNumber] = React.useState("");

const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Verify Passcode!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>Passcode</Text>
          <MaskInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText} >
           Verify
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
