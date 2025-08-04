import React, { useContext, useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Card from './components/Card';
import { Mystore } from './context/MyContext';

const App = () => {

  let {Toggle, setToggle, userData , setuserData} = useContext(Mystore)

  

  return (
    <div className='p-4'>
      <h1 className='mb-3'>Users</h1>

      {Toggle ? (
        <Register
        />
      ) : (
        <Login/>
      )}

      <ol className='mb-4'>
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
