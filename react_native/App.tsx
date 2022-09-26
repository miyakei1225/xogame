import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import User from './src/screens/User'
import { RootStackParamList } from '@/types'
import { NativeBaseProvider } from 'native-base'
import Game from './src/screens/Game'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
