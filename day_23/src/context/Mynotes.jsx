import { createContext, useState } from 'react';


export const Mynotes = createContext();

export const MynotesProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [notes , setNotes ] = useState('')
  const [title , setTitle] = useState('')
  const [saved , setSaved] = useState([])
  const [update,setUpdate] = useState('')

  return (
    <Mynotes.Provider value={{ toggle, setToggle,notes , setNotes, saved , setSaved, title , setTitle ,update,setUpdate }}>
      {children}
    </Mynotes.Provider>
  );
};
