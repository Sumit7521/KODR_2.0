import React from 'react'
import AppRouter from './Router/AppRouter'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App