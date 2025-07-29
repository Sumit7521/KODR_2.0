import React, { useState } from 'react'

const Form = () => {
    const [name , setname] = useState("sumit")
    const [email , setemail] = useState("sumit@gmail.com")
    const [number , setnumber] = useState(1234567890)

    const submithandler = (e) =>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(number)

    }
  return (
    <div>
        <form onSubmit={submithandler} action="">
            <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder='name' />
            <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" name="email" placeholder='email'/>
            <input onChange={(e)=>setnumber(e.target.value)} value={number} type="number" name="number" placeholder='75666876' />
            <button className='bg-red-400'>OK</button>
        </form>
    </div>
  )
}

export default Form