import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStackNavigation from './src/Navigation/rootStackNavigation'

export default function App(){
  return (
    <NavigationContainer>
      <RootStackNavigation/>
    </NavigationContainer>
  )
}
