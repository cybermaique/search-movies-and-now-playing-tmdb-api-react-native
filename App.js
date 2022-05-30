import App2 from './src/App2'
import App from './src/App'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmCartaz from './src/EmCartaz'

const Stack = createNativeStackNavigator();

export default function Main(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
          <Stack.Screen name="Search" component = {App2} />
          <Stack.Screen name="Em Cartaz" component = {EmCartaz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
