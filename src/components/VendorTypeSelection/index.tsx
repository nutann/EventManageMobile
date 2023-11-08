"use strict";

import React, { useRef, useState } from "react";

import { View, Text, TextInput, Switch, Image, Alert } from "react-native";

import ModalSelector from "react-native-modal-selector";
import { countryList } from "../../assets/VendorList";

const VendorTypeSelection = (props) => {
  const [textInputValue, setTextInputValue] = useState("");
  const ref = useRef<ModalSelector>();
  return (
      <ModalSelector style={props.style}
        data={countryList}
        keyExtractor={(x) => x.name}
        labelExtractor={(x) => x.name}
        initValue="Select your Business"
        initValueTextStyle={{ color: "black" }}
        selectStyle={{ borderColor: "black", borderWidth: 0}}
        selectTextStyle={{ color: "black" }}
        onChange={(option) => {
          setTextInputValue(option.name);
        }}
        componentExtractor={(option) => <ListItem data={option} />}
        header={
          <View style={{ padding: 16, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Select your Business</Text>
            <Text style={{ fontSize: 13, color: '#bbbbbb' }}>
              Please, select an option
            </Text>
          </View>
        }
      />
   
  );
};

const ListItem = ({ data }) => {
  return (
    <View key={data.number} style={{ flexDirection: "row" }}>
      <Text> {data.name}</Text>
    </View>
  );
};

export default VendorTypeSelection;