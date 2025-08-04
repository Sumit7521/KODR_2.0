import { createContext, useState } from "react";

export const Mystore = createContext()

export const MyContextProvider = ({children}) =>{

    const [Toggle, setToggle] = useState(true);
    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem("users");
            return storedData ? JSON.parse(storedData) : [];
                });


    return <Mystore.Provider value={{Toggle , setToggle , userData , setUserData}}>
        {children}
    </Mystore.Provider>
}