import React, { useContext } from 'react';
import { Mynotes } from '../context/Mynotes';

const NotesCard = () => {
  const { saved ,setSaved ,notes , setNotes, title , setTitle ,toggle,setToggle ,update,setUpdate} = useContext(Mynotes);

  const updatehandler= (e) =>{
    setTitle(e.title)
    setNotes(e.notes)
    setUpdate(e.id)
    console.log(e.title)
    console.log(e.notes)
  }

  const store = JSON.parse(localStorage.getItem('mynote'));
  
  const deletehandler= (id) =>{
    const updatednote = saved.filter(notes => notes.id !== id)
      setSaved(updatednote)
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.isArray(saved) && saved.map((e) => (
        <div
          key={e.id}
          className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-xl font-semibold text-blue-700">{e.title}</h1>
            <p className="text-gray-700 mt-2">{e.notes}</p>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button onClick={()=>deletehandler(e.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
              Delete
            </button>
            <button onClick={()=>{
              updatehandler(e)
              setToggle(!toggle)
              }} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesCard;
