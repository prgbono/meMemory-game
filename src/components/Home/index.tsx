import { HOME_LOGO_URL_IMAGE } from '@/utils/constants'
import { initialCards } from '@/utils'
import { initializeGame } from '@/store/slices/gameSlice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleStart = () => {
    dispatch(initializeGame(initialCards))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 flex size-32 items-center justify-center rounded-full border-4 border-gray-300 bg-gray-200 shadow-lg">
        <img
          src={HOME_LOGO_URL_IMAGE}
          alt="MeMemory Game"
          className="size-16 rounded-full object-cover"
        />
      </div>
      <h1 className="mb-16 text-5xl font-bold">{t('home.me_memory')}</h1>
      <button
        onClick={handleStart}
        className="rounded-full bg-red-500 px-8 py-3 text-white transition-all hover:bg-red-600"
      >
        {t('home.start')}
      </button>
    </div>
  )
}

export default Home
