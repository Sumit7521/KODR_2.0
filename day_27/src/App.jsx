import React from 'react'
import Users from './Pages/Users'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <header className='w-full bg-blue-500 flex justify-center'>
        <h1 className='text-2xl text-white font-bold'>Users Dashboard</h1>
      </header>
      <div className='flex'>
        <Navbar />
        <Users />
      </div>
      
    </div>
  )
}

export default App