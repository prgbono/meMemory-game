import { GAME_STATUS } from '@/utils/constants'

export interface Card {
  id: number
  image: string
  flipped: boolean
  matched: boolean
}

export interface GameState {
  cards: Card[]
  selectedCards: number[]
  gameStatus: GameStatusType
}

export type GameStatusType = (typeof GAME_STATUS)[keyof typeof GAME_STATUS]
