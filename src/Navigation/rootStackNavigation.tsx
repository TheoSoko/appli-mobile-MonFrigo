import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home'
import IngredientsForm from '../Screens/IngredientsForm'
import {RootStackParams} from '../types'

const Stack = createNativeStackNavigator<RootStackParams>()

export default function RootStackNavigation(){
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='IngredientsForm' component={IngredientsForm}/>
        </Stack.Navigator>
    )
}
