import React from 'react'
import { View } from 'native-base'
import { Button } from 'react-native'

type SquareType = 'O' | 'X' | null

type SquareProps = {
  onPress: () => void
  value: SquareType
}

const Square: React.FC<SquareProps> = ({ onPress, value }) => {
  return (
    <View style={[{ borderWidth: 1, borderColor: 'gray', margin: 10 }]}>
      <Button onPress={onPress} title={value ? `${value}` : ''} />
    </View>
  )
}

export default Square
