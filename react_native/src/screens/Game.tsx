// import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Box } from 'native-base'
import React from 'react'
import Board from '../components/molecules/Board'

const style = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  body: {
    fontSize: '14px',
    margin: '20px'
  },
  boardRow: {}
})

const Game: React.FC = () => {
  return (
    <Box>
      <Box>
        <Board />
      </Box>
      <Box>
        <Box>{/* status */}</Box>
        <Box>{/* TODO */}</Box>
      </Box>
    </Box>
  )
}

export default Game
