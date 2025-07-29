import React, { useState } from 'react'

const Twowaybind = () => {

    const [name ,setname] = useState("")
    console.log(name)

  return (
    <div className='flex flex-col gap-2'>
        <input onChange={(e)=>setname(e.target.value)} type="text" className='bg-gray-500'/>
        <button type="submit" className='bg-gray-500 text-black border-2'>Submit</button>
    </div>
  )
}

export default Twowaybind