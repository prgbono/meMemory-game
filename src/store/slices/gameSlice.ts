import { Card, GameState } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { GAME_STATUS } from '@/utils/constants'
import { shufflingCards } from '@/utils'

const initialState: GameState = {
  cards: [],
  selectedCards: [],
  gameStatus: GAME_STATUS.IDLE
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame(state, action: PayloadAction<Card[]>) {
      state.cards = shufflingCards(action.payload)
      state.selectedCards = []
      state.gameStatus = GAME_STATUS.IDLE
    },
    resetGame(state) {}
  }
})

export const { initializeGame, resetGame } =
  gameSlice.actions
export default gameSlice.reducer
