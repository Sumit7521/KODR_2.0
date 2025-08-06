import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MynotesProvider } from './context/Mynotes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MynotesProvider>
      <App />
    </MynotesProvider>
  </StrictMode>,
)
