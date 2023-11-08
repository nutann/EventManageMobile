

import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { phoneMask } from "../../utils/phoneNumberMask";
import MaskInput, { Masks } from "react-native-mask-input";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import {TabGroup} from '../../components/Tabs'
// import React in our code
import React, {useEffect, useState} from 'react';
import { ButtonGroup } from '@rneui/themed';
import Actions from './actions';
import Posts from '../../components/Posts'

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
} from 'react-native';

export function Profile() {
  const [dataSource, setDataSource] = useState([]);
  const styles = SignInStyles;
  const [hidePass, setHidePass] = useState(true);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const navigation = useNavigation<StackTypes>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [postCategory, setPostCategory] = useState(1);

  const onCategorySelected = (category) => {
    if (!category) {
      return;
    }
    setPostCategory(() => category);
  }
  return (
    <View style={styles.container}>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://unsplash.it/400/400?image=3'}}
            />
      <Text>Name: John Doe</Text>
      <Text>Business: Photographer</Text>
      <Actions onCategorySelected={onCategorySelected} isGrid/>
    <SafeAreaView style={styles.container}>
    <Posts postCategory={postCategory} isGrid /> 
    </SafeAreaView>
    </View>
  );
}


