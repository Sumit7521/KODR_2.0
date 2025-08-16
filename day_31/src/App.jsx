import React, { useEffect } from 'react'
import AppRouter from './Router/AppRouter'

const App = () => {

  useEffect(()=>{
    let authenticaticatedUser = JSON.parse(localStorage.getItem('auth') ||{} )

    if(authenticaticatedUser){
      
    }
  })
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App