import { resetTimer, startTimer, stopTimer } from '@/store/slices/gameSlice'
import { useDispatch, useSelector } from 'react-redux'

import { ClockIcon } from '@heroicons/react/24/outline'
import { GameOverModalProps } from './GameOverModalProps.types'
import { RootState } from '@/store'
import { formatTime } from '@/utils'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const GameOverModal: React.FC<GameOverModalProps> = ({ onRestart }) => {
  const { t } = useTranslation()
  const { time } = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(stopTimer())
    return () => {
      dispatch(resetTimer())
      dispatch(startTimer())
    }
  }, [dispatch])

  return (
    <div className="animate__animated animate__zoomIn fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <div className="flex items-center justify-center gap-8 text-2xl font-bold text-gray-800 mb-8">
          <span className="text-2xl font-bold">{t('gameOverModal.done')}</span>
          <div className="flex items-center justify-center gap-1">
            <ClockIcon className="w-6 h-6 text-gray-500" />
            <span className="flex items-center font-medium text-4xl text-gray-600">
              {formatTime(time)}
            </span>
          </div>
        </div>
        <button
          onClick={onRestart}
          className="rounded-full bg-red-500 px-6 py-2 text-white transition-all hover:bg-red-600"
        >
          {t('gameOverModal.play_again')}
        </button>
      </div>
    </div>
  )
}

export default GameOverModal
