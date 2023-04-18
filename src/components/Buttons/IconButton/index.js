import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../../Icon";

export default function IconButton(props, { name, size, color }, style = {}) {
  return (
    <TouchableOpacity style={[styles.button, { style }]} onPress={props.onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 3,
  },
});
