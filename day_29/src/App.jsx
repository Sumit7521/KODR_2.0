import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , incrementByValue } from './features/counterSlice'

const App = () => {

  const [Value, setValue] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='bg-black h-screen text-white ml'>
      <h1>Hello from app</h1>
      <h2>count - {count}</h2>
      <div className='flex gap-4 mt-3'>
        <button onClick={()=> dispatch(increment())} className='border-2 px-1 bg-gray-400 text-black'>increment</button>
        <button onClick={()=> dispatch(decrement())} className='border-2 px-1 bg-gray-400 text-black'>decrement</button>
        <input type="number" onChange={(e)=>setValue(e.target.value)} className='bg-gray-600' />
        <button onClick={()=> dispatch(incrementByValue(Value))} className='border-2 px-1 bg-gray-400 text-black'>IBV</button>
      </div>
    </div>
  )
}

export default App