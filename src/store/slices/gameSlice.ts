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

    resetGame(state) {
      state.cards = state.cards.map((card) => ({
        ...card,
        flipped: false,
        matched: false
      }))
      state.selectedCards = []
      state.gameStatus = GAME_STATUS.IDLE
    }
  }
})

export const { initializeGame, flipCard, checkMatch, resetGame } =
  gameSlice.actions
export default gameSlice.reducer
