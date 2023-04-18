import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Lists from "../../containers/Lists";
import Words from "../../containers/Words";
import AddingListOrWord from "../../containers/AddingListOrWord";
import { LISTS_SCREEN, WORDS_SCREEN, ADD_LIST_SCREEN, ADD_WORD_SCREEN } from "../../../constants";
const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={LISTS_SCREEN} component={Lists}></Stack.Screen>
        <Stack.Screen name={WORDS_SCREEN} component={Words}></Stack.Screen>
        <Stack.Screen name={ADD_LIST_SCREEN} component={AddingListOrWord}></Stack.Screen>
        <Stack.Screen name={ADD_WORD_SCREEN} component={AddingListOrWord}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
