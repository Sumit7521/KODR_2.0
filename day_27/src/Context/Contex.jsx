import axios from "axios";
import { createContext, useState } from "react";

export const MydataContext = createContext()

export const MycontextProvider=({children})=>{

const [users, setUsers] = useState([])
const [filter , setfilter] = useState('')

    const getuser = async()=>{
        try {
            const res = await axios.get("https://fakestoreapi.com/users")
            console.log(res.data)
            setUsers(res.data)
            setfilter(res.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
    <MydataContext.Provider value={{users,setUsers, getuser , filter , setfilter}}>
        {children}
    </MydataContext.Provider>
)}