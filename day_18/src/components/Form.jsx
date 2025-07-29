import React, { useState } from 'react'

const Form = () => {
  const [Formdata, setFormdata] =useState({
    name:"",
    email:"",
    number:""
  })
    // const [name , setname] = useState("sumit")
    // const [email , setemail] = useState("sumit@gmail.com")
    // const [number , setnumber] = useState(1234567890)
    const handlechange =(e)=>{
      const {value , name} = e.target
      setFormdata({
        ...Formdata,
        [name]:value,
      })
    }

    const submithandler = (e) =>{
        e.preventDefault()
        console.log(Formdata.name)
        console.log(Formdata.email)
        console.log(Formdata.number)

    }
  return (
    <div className=' bg-gray-100 h-screen w-screen flex justify-center items-center flex-col gap-5'>
        <form className='flex justify-center items-center flex-col gap-5 bg-gray-500 p-10 rounded-2xl ' onSubmit={submithandler} action="">
            <input className='bg-gray-300 w-[400px] px-5 py-2 border-none rounded' value={Formdata.name} onChange={handlechange} type="text" placeholder='name' name='name' />
            <input  className='bg-gray-300 w-[400px] px-5 py-2 border-none rounded' value={Formdata.email} onChange={handlechange} type="email" name="email" placeholder='email'/>
            <input  className='bg-gray-300 w-[400px]  px-5 py-2 border-none rounded' value={Formdata.number} onChange={handlechange} type="number" name="number" placeholder='75666876' />
            <button className='bg-blue-400 w-[400px] text-white px-8 py-2 rounded-[10px] border-0 font-medium'>OK</button>
        </form>
    </div>
  )
}

export default Form