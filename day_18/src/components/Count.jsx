import React from 'react'

const Count = () => {
    let greeting ="hello"
  const [count , setcount]= useState(0)

  const increment =()=>{
    setcount(count+1)
  }
  const decrement =()=>{
    setcount(count-1)
  }
  return (
    <div className='flex flex-col items-center justify-center bg-gray-600 h-screen w-screen'>
      <h1 className='text-3xl'>{count}</h1>
      <div className='flex gap-3'>
        <button onClick={increment} className='border-2 h-5 w-10 flex items-center justify-center'>+</button>
        <button onClick={decrement} className='border-2 h-5 w-10 flex items-center justify-center'>-</button>
      </div>
    </div>
  )
}

export default Count