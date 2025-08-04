import { createContext, useState } from "react";
const html = document.documentElement


export const Mystore = createContext()

export const MyContextProvider = ({children}) =>{

    const [theme, settheme] = useState(html.classList.contains('dark'))
    const [Toggle, setToggle] = useState(true);
    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem("users");
            return storedData ? JSON.parse(storedData) : [];
                });


    return <Mystore.Provider value={{Toggle , setToggle , userData , setUserData , theme , settheme}}>
        {children}
    </Mystore.Provider>
}