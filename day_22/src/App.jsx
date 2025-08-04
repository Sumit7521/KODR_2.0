import React, { useContext, useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Card from './components/Card';
import { Mystore } from './context/MyContext';
import { Switch } from './components/ui/switch';
const html = document.documentElement

const App = () => {

  let {Toggle, setToggle, userData , setuserData , theme , settheme} = useContext(Mystore)

  

  const toggleDarkMode = () => {
  if (theme) {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    settheme(false)
  } else {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    settheme(true)
  }
};

  return (
    <div className='p-4 items-center w-full h-screen flex flex-col'>
      <div className='flex justify-between items-center w-70'>
        <h1 className='mb-3'>Users</h1>
        <span className='flex gap-3 items-center text-xs'>
          <h5>Dark mode</h5>
          <Switch onClick={toggleDarkMode} />
        </span>
        
      </div>
      

      {Toggle ? (
        <Register
        />
      ) : (
        <Login/>
      )}

      <ol className='mt-6 mb-4'>
        {userData
          .map((user, index) => (
            <Card
              key={index}
              username={user.username}
              email={user.email}
              phone={user.mobile}
            />
        ))}
</ol>

        

    </div>
  );
};

export default App;
