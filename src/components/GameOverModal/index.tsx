import { GameOverModalProps } from './GameOverModalProps.types'

const GameOverModal: React.FC<GameOverModalProps> = ({ onRestart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="rounded-lg bg-white p-6 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          ¡Completado!
        </h2>
        <p className="mb-6 text-xl">
          ¡Has encontrado todas las parejas!
        </p>
        <button
          onClick={onRestart}
          className="rounded-full bg-red-500 px-6 py-2 text-white transition-all hover:bg-red-600"
        >
          Jugar otra vez
        </button>
      </div>
    </div>
  )
}

export default GameOverModal
