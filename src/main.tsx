import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18n/index'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
