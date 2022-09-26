import { Box, Center, HStack, View } from 'native-base'
import React, { useState } from 'react'
import Square from '../atoms/Square'

type SquareType = 'O' | 'X' | null

const Board: React.FC = () => {
  const [squares, setSquares] = useState<Array<SquareType>>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const handleClick = (i: number) => {
    const _squares = squares.slice()
    if (calculateWinner(_squares) || _squares[i]) {
      return
    }
    _squares[i] = xIsNext ? 'X' : 'O'
    setSquares(_squares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i: number) => {
    return (
      <View style={{ backgroundColor: '#fff', borderColor: '#999' }}>
        <Square value={squares[i]} onPress={() => handleClick(i)} />
      </View>
    )
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <Box>
      <Box>{status}</Box>
      <Center>
        <HStack>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </HStack>
        <HStack>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </HStack>
        <HStack>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </HStack>
      </Center>
    </Box>
  )
}

function calculateWinner(squares: Array<SquareType>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Board
