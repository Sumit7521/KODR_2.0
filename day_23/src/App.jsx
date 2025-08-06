import React, { useContext, useState } from 'react'
import Notesform from './components/Notesform'
import { Mynotes } from './context/Mynotes'
import NotesCard from './components/NotesCard'

const App = () => {
  let{setToggle , toggle ,saved, setSaved} = useContext(Mynotes) 
  return (
    <div className='realative w-full h-[100vh] bg-gray-200 p-3'>
      <div className='flex justify-between bg-white p-4'>
        <h1 className='text-2xl'>Notes App</h1>
        <button className='px-4 py-2 rounded bg-blue-600 text-white' onClick={()=>{
          setToggle(true)
        }}>Add Notes</button>
      </div>
      {toggle ? 
      <div  className='absolute top-0 left-0 h-full w-full bg-gray-400 flex items-center justify-center'>
        <Notesform />
      </div>
      :''}
      <NotesCard />
    </div>
    
  )
}

export default App