import { flipCard, gameSlice, initialState } from './gameSlice'

import { GAME_STATUS } from '@/utils/constants'
import { initialCards } from '@/utils'

describe('Testing gameSlice', () => {
  test('gameSlice must names "game"', () => {
    expect(gameSlice.name).toBe('game')
  })

  test('gameSlice must returns initialState', () => {
    const state = gameSlice.reducer(initialState, { type: '' })
    expect(state).toEqual(initialState)
  })

  test('gameSlice flipCard card with id = 1', () => {
    const stateWithCards = {
      cards: initialCards,
      selectedCards: [],
      gameStatus: GAME_STATUS.IDLE,
      time: 0,
      isRunning: false
    }
    const state = gameSlice.reducer(stateWithCards, flipCard(1))
    console.log(initialCards)
    expect(state).toEqual({
      cards: [
        {
          id: 1,
          image: '/src/assets/image1.png',
          flipped: false,
          matched: false
        },
        {
          id: 2,
          image: '/src/assets/image2.png',
          flipped: true,
          matched: false
        },
        {
          id: 3,
          image: '/src/assets/image3.png',
          flipped: false,
          matched: false
        },
        {
          id: 4,
          image: '/src/assets/image4.png',
          flipped: false,
          matched: false
        },
        {
          id: 5,
          image: '/src/assets/image5.png',
          flipped: false,
          matched: false
        },
        {
          id: 6,
          image: '/src/assets/image6.png',
          flipped: false,
          matched: false
        },
        {
          id: 7,
          image: '/src/assets/image7.png',
          flipped: false,
          matched: false
        },
        {
          id: 8,
          image: '/src/assets/image8.png',
          flipped: false,
          matched: false
        },
        {
          id: 9,
          image: '/src/assets/image9.png',
          flipped: false,
          matched: false
        }
      ],
      selectedCards: [1],
      gameStatus: GAME_STATUS.FLIPPING_CARD,
      time: 0,
      isRunning: false
    })
  })

  test('gameSlice resetGame', () => {
    const state = gameSlice.reducer(initialState, { type: 'resetGame()' })
    expect(state).toEqual({
      cards: [],
      selectedCards: [],
      gameStatus: GAME_STATUS.IDLE,
      time: 0,
      isRunning: false
    })
  })
})
