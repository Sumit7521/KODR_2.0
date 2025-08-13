import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , incrementByValue } from './features/counterSlice'
import { addUser, deleteuser } from './features/userSlice'

const App = () => {

  const [Value, setValue] = useState(0)
  const [formdata, setformdata] = useState({
    name : '',
    email : '',
    phone :'',
    password :''
  })

  const count = useSelector((state) => state.counter.value)
  const user = useSelector((state) => state.user.value)

  const dispatch = useDispatch()

  const submithandler =(e)=>{
    e.preventDefault()
    dispatch(addUser(formdata) )
  }
  return (
    <div className='bg-black h-screen text-white ml'>
      <h1>Hello from app</h1>
      <h2>count - {count}</h2>
      <div className='flex gap-4 mt-3'>
        <button onClick={()=> dispatch(increment())} className='border-2 px-1 bg-gray-400 text-black'>increment</button>
        <button onClick={()=> dispatch(decrement())} className='border-2 px-1 bg-gray-400 text-black'>decrement</button>
        <input type="number" onChange={(e)=>setValue(e.target.value)} className='bg-gray-600' />
        <button onClick={()=> dispatch(incrementByValue(Value))} className='border-2 px-1 bg-gray-400 text-black'>IBV</button>
        <form onSubmit={submithandler}>
          <input onChange={(e)=>setformdata({...formdata, name:e.target.value})} type="text" placeholder='name' name='name' value={formdata.name} />
          <input onChange={(e)=>setformdata({...formdata, email:e.target.value})} type="email" placeholder='email' name='email' value={formdata.email}/>
          <input onChange={(e)=>setformdata({...formdata, phone:e.target.value})} type="number" placeholder='Mobile' name='phone' value={formdata.phone} />
          <input onChange={(e)=>setformdata({...formdata, password:e.target.value})} type="password" placeholder='password' name='password' value={formdata.password} />
          <button type="submit">submit</button>
        </form>
      </div>
      {user &&
      <div>
        <h1>name : {user?.name}</h1>
        <h1>email : {user?.email}</h1>
        <h1>phone : {user?.phone}</h1>
        <h1>password : {user?.password}</h1>
        <button onClick={()=>dispatch(deleteuser())}>delete</button>
      </div>}
      
    </div>
  )
}

export default App