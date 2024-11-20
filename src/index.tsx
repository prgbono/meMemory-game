import 'tailwindcss/tailwind.css'
import './i18n/i18n'

import App from '@/components/App'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store from '@/store'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
