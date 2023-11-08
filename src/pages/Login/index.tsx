import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { phoneMask } from "../../utils/phoneNumberMask";
import MaskInput, { Masks } from "react-native-mask-input";
import { StackTypes } from "../../routes";
import VendorTypeSelection from '../../components/VendorTypeSelection'
import { useNavigation } from "@react-navigation/native";
export function Login() {
  const styles = SignInStyles;
  const [hidePass, setHidePass] = useState(true);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Register!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText} >
           Sign Up
          </Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
          />
          <Text style={styles.title}>Password</Text>
          <View style={styles.password}>
            <TextInput
              autoCorrect={false}
              secureTextEntry={hidePass ? true : false}
              style={styles.passwordInput}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" size={25} />
              ) : (
                <Ionicons name="eye-off" size={25} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Phone Number</Text>
          <MaskInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
          <Text style={styles.title}>Select your Business</Text>
          <VendorTypeSelection style={styles.vendorType}></VendorTypeSelection>
        </View>
      
      </Animatable.View>
    </View>
  );
}
