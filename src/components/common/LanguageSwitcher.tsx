import React from 'react'
import { useTranslation } from 'react-i18next'
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="absolute top-4 right-4 flex items-center space-x-2">
      <button
        className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  )
}
export default LanguageSwitcher
