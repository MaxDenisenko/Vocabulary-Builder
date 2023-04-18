import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator, Text } from "react-native";
import colors from "../../../assets/styles/colors";
export default function Button(props) {
  if (props.loading) {
    return (
      <TouchableOpacity onPress={props.onPress} disabled>
        <ActivityIndicator size="small" color={colors.blue}></ActivityIndicator>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text style={{ color: colors.blue }}>Text</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    height: 35,
    width: 120,
    justifyContent: center,
    alignItems: center,
    backgroundColor: colors.blue3,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: colors.blue,
    elevation: 3,
    borderWidth: 0,
  },
});
