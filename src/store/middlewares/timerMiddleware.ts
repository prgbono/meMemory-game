import { incrementTime, startTimer, stopTimer } from '../slices/gameSlice'

import { Middleware } from '@reduxjs/toolkit'

let intervalId: number | null = null

export const timerMiddleware: Middleware = (store) => (next) => (action) => {
  if (startTimer.match(action)) {
    if (!intervalId) {
      intervalId = window.setInterval(() => {
        store.dispatch(incrementTime())
      }, 1000)
    }
  }

  if (stopTimer.match(action)) {
    if (intervalId !== null) {
      window.clearInterval(intervalId)
      intervalId = null
    }
  }

  return next(action)
}
