import React from 'react'
import { StatusBar } from 'react-native'

export default function NavigationHeader ({barStyle='dark', backgroundColor='transparent'}) {
    return <StatusBar animated={true} translucent={true} backgroundColor={backgroundColor} barStyle={`${barStyle}-content`}  />;
}


