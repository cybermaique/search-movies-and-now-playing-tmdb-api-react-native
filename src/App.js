import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './pages/Home'
import Sobre from './pages/Sobre'


const Stack = createNativeStackNavigator();

export default App => {
    return (
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component = {Home} />
                <Stack.Screen name="Sobre" component = {Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
