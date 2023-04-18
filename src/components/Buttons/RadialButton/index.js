import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../../Icon";
import colors from "../../../assets/styles/colors.js";

export default function RadialButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon name="plus" color={colors.white} size={35} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 55,
    width: 55,
    maxHeight: 55,
    maxWidth: 55,
    backgroundColor: colors.blue,
    shadowColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27.5,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
    position: "absolute",
    borderWidth: 0,
    bottom: 0,
    right: 29,
    opacity: 1,
  },
});
