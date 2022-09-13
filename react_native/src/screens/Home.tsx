import { RootStackParamList } from '@/types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()
  console.log(navigation)
  return (
    <View>
      <Text>ホーム画面</Text>
      <Button title="ユーザー" onPress={() => navigation.navigate('User')} />
    </View>
  )
}

export default Home
