import { CircleX } from 'lucide-react';
import React, { useContext } from 'react';
import { Mynotes } from '../context/Mynotes';
import { nanoid } from 'nanoid';

const NotesForm = () => {

  let{setToggle,toggle, notes , setNotes ,saved , setSaved ,title , setTitle,update, setUpdate} = useContext(Mynotes)

  const notehandler =(e)=>{
    setNotes(e.target.value)
  }
  const titlehandler =(e)=>{
    setTitle(e.target.value)
  }


  const submithandler=(e)=>{
    e.preventDefault()

    const newnotes = {
      id: nanoid(),
      title:title,
      notes:notes
    }

    if(update){
      
    }
    
    setSaved([...saved ,newnotes])
    localStorage.setItem('mynote', JSON.stringify(saved))
    setToggle(!toggle)

  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-semibold'>Add Note</h1>
          <button onClick={() => setToggle(false)} className='text-gray-500 hover:text-red-500 transition'>
            <CircleX size={24} />
          </button>
        </div>

        <form onSubmit={submithandler} className='flex flex-col gap-4'>
          <input
            onChange={titlehandler}
            type="text"
            placeholder='Title'
            className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />

          <textarea
            onChange={notehandler}
            rows="5"
            placeholder='Your note...'
            className='border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400'
          />

          <button
            type="submit"
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-fit self-end'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotesForm;
