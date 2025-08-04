import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Mystore } from '../context/MyContext';

const Login = () => {
  

  let {userData , setToggle , Toggle} = useContext(Mystore)
  console.log("login",Mystore)

    const [email , setemail] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const userExists = userData.find(user => user.email === email);

        console.log(userData)

    if (userExists) {
      toast.success('User found! ✅');
    } else {
      toast.error('User not found ❌');
    }
  };

  return (
    <div>
        <form onSubmit={handleLogin} action="" className='flex flex-col gap-2 w-50'>
            <input className='border-2 rounded px-3 py-1' onChange={(e)=>setemail(e.target.value)} value={email} type="email" name="email" placeholder='email'/>
            <input className='border-2 rounded px-3 py-1'  type="password" name="password" placeholder='password'/>
            <button className='border-2 bg-blue-600 rounded  px-3 py-1'  type="submit">Login</button>
        </form>
        <p className='mt-2'>Don't have an account ? 
            <span onClick={(()=>setToggle(!Toggle))} className='text-blue-500 cursor-pointer'>Register now</span> 
        </p>
    </div>
  )
}

export default Login