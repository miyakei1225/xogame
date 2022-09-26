import { RootStackParamList } from '@/types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Box, Text, Button } from 'native-base'

const User = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()
  return (
    <View>
      <Text>ユーザー画面</Text>
      <Button onPress={() => navigation.navigate('Home')}>ホーム</Button>
    </View>
  )
}

export default User
