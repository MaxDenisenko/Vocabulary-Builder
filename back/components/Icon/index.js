import React from "react";
import { createIconSetFromFontello } from "@expo/vector-icons";
import fontelloConfig from "../../assets/fonts/fontIcon/config.json";
const Icon = ({ name, size, color }) => {
  const Icon = createIconSetFromFontello(fontelloConfig, "fonticons");
  return <Icon name={name} size={size} color={color} />;
};
export default Icon;
