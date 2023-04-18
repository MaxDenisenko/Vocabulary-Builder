import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
export default function Input({ style = {}, placeholder, onChangeText, value }) {
  return (
    <View style={[styles.input, { style }]}>
      <TextInput style={styles.textinput} placeholder={placeholder} onChangeText={onChangeText} value={value}></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    height: 35,
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.white,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: colors.black,
    elevation: 3,
    borderWidth: 0,
  },
  textinput: {
    flex: 1,
    color: colors.black,
    justifyContent: center,
    fontFamily: RobotoRegular,
    fontSize: 18,
  },
});
