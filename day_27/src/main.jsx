import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MycontextProvider} from './Context/Contex.jsx'

createRoot(document.getElementById('root')).render(
  <MycontextProvider>
    <App />
  </MycontextProvider>
)

