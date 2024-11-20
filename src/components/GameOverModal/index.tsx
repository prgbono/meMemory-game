import { GameOverModalProps } from './GameOverModalProps.types'
import { useTranslation } from 'react-i18next'

const GameOverModal: React.FC<GameOverModalProps> = ({ onRestart }) => {
  const { t } = useTranslation()
  return (
    <div className="animate__animated animate__zoomIn fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="rounded-lg bg-white p-6 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">{t('gameOverModal.done')}</h2>
        <p className="mb-6 text-xl">
          {t('gameOverModal.all_pairs_matched')}
        </p>
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
