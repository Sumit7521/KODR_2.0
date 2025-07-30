import React from 'react'
import { useState } from 'react'

const App = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
  });
  const [show ,setshow] = useState(false)
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(form)
    setshow(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" name='name'placeholder='name' onChange={handleChange} />
        <input type="email" name="email" id="" placeholder='email' onChange={handleChange}/>
        <input type="number" name="number" id="" placeholder='number' onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      {show ?(<div>
        <h3>Preview:</h3>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
        <p>Number: {form.number}</p>
      </div>):""}

    </div>
  )
}

export default App