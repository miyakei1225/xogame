import { RootStackParamList } from '@/types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'

const User = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()
  return (
    <View>
      <Text>ユーザー画面</Text>
      <Button title="ホーム" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default User
