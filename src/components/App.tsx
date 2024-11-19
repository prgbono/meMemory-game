import { useDispatch, useSelector } from 'react-redux'

import { GAME_STATUS } from '@/utils/constants'
import GameBoard from './GameBoard'
import GameOverModal from './GameOverModal'
import Home from './Home'
import { RootState } from '@/store'
import { resetGame } from '@/store/slices/gameSlice'

const App: React.FC = () => {
  const { cards, gameStatus } = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()
  const restartGame = () => dispatch(resetGame())

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
  return <div>App.tsx</div>
      {cards.length === 0 ? <Home /> : <GameBoard />}
      {gameStatus === GAME_STATUS.GAME_COMPLETED && (
        <GameOverModal onRestart={restartGame} />
      )}
    </div>
  )
}

export default App
