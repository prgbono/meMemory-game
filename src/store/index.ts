import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slices/gameSlice'
import { timerMiddleware } from './middlewares/timerMiddleware'

const store = configureStore({
  reducer: {
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(timerMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
