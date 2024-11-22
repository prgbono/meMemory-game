import { Card, GameState } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { GAME_STATUS } from '@/utils/constants'
import { shufflingCards } from '@/utils'

export const initialState: GameState = {
  cards: [],
  selectedCards: [],
  gameStatus: GAME_STATUS.IDLE,
  time: 0,
  isRunning: false
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame(state, action: PayloadAction<Card[]>) {
      state.cards = shufflingCards(action.payload)
      state.selectedCards = []
      state.gameStatus = GAME_STATUS.IDLE
      state.time = 0
      state.isRunning = false
    },

    flipCard(state, action: PayloadAction<number>) {
      const cardIndex = action.payload
      if (
        state.gameStatus === GAME_STATUS.IDLE ||
        state.gameStatus === GAME_STATUS.FLIPPING_CARD
      ) {
        state.cards[cardIndex].flipped = !state.cards[cardIndex].flipped
        state.selectedCards.push(cardIndex)
        state.gameStatus =
          state.selectedCards.length === 2
            ? GAME_STATUS.CHECKING_MATCH
            : GAME_STATUS.FLIPPING_CARD
      }
    },
    checkMatch(state) {
      if (state.selectedCards.length === 2) {
        const [firstCardIndex, secondCardIndex] = state.selectedCards

        if (
          state.cards[firstCardIndex].image ===
          state.cards[secondCardIndex].image
        ) {
          state.cards[firstCardIndex].matched = true
          state.cards[secondCardIndex].matched = true
        } else {
          state.cards[firstCardIndex].flipped = false
          state.cards[secondCardIndex].flipped = false
        }

        state.selectedCards = []
        state.gameStatus = state.cards.every((card) => card.matched)
          ? GAME_STATUS.GAME_COMPLETED
          : GAME_STATUS.IDLE
      }
    },

    resetGame(state, action: PayloadAction<Card[]>) {
      state.cards = shufflingCards(action.payload) // Nuevo orden
      state.selectedCards = []
      state.gameStatus = GAME_STATUS.IDLE
    },

    startTimer(state) {
      state.isRunning = true
    },
    stopTimer(state) {
      state.isRunning = false
    },
    resetTimer(state) {
      state.time = 0
      state.isRunning = false
    },
    incrementTime(state) {
      if (state.isRunning) {
        state.time += 1
      }
    }
  }
})

export const {
  initializeGame,
  flipCard,
  checkMatch,
  resetGame,
  startTimer,
  stopTimer,
  resetTimer,
  incrementTime
} = gameSlice.actions
export default gameSlice.reducer
