import { useForm } from 'react-hook-form'
import React from 'react'

const Hookform = () => {
    const {handleSubmit, register , formState:{ errors}}= useForm()

    const submit = (data) =>{
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder='name' {...register('name',{required : 'name required'})} />
            {errors.name && <p>{errors.name.message}</p>}
            <input type="email" name="" id="" placeholder='email' {...register('email',{required : 'enter email'})} />
            {errors.email && <p>{errors.email.message}</p>}
            <input
                type="number"
                placeholder="number"
                {...register('number', {
                    required: 'Enter 10 digits',
                    minLength: { value: 10, message: 'Number must be at least 10 digits' },
                })}
                />
                {errors.number && <p>{errors.number.message}</p>}
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Hookform