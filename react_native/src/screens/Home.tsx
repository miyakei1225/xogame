import { RootStackParamList } from '@/types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Text, Button } from 'native-base'

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()
  console.log(navigation)
  return (
    <View>
      <Text>ホーム画面</Text>
      <Button onPress={() => navigation.navigate('User')}>ユーザー</Button>
      <Button onPress={() => navigation.navigate('Game')}>◯×ゲーム</Button>
    </View>
  )
}

export default Home
