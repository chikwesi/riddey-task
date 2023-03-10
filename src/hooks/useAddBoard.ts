import { useState } from 'react'

export function useAddBoard(maxBoards: number, initial?: number) {
  const [boards, addNewBoard] = useState(initial ?? 0)
  const islimit = boards === maxBoards

  const handleAddNewBoard = () => {
    addNewBoard((value) => (value < maxBoards ? value + 1 : value))
  }

  return {
    limitReached: islimit,
    addBoard: handleAddNewBoard,
    noOfBoardsAdded: boards,
  }
}
