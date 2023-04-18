import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import * as Font from 'expo-font';
import RobotoBold from './src/assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoMedium from './src/assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoRegular from './src/assets/fonts/Roboto/Roboto-Regular.ttf';
import fonticons from './src/assets/fonts/fontIcon/fonticons.ttf';

export default function App() {
  const [FontsStatus, setFontsStatus] = useState(false);
  useEffect(()=> {
    const getFonts = async()=> {
      await Font.loadAsync({ RobotoBold, RobotoMedium, RobotoRegular, fonticons });
      setFontsStatus(true);
    }
    getFonts();
  },[]);
  if (!FontsStatus) {
    return <ActivityIndicator size={'small'}/>
  }
  return (
    <View styles={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
