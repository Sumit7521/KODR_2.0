
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Card from './components/Card';

const App = () => {
  const [Toggle, setToggle] = useState(true);
  const [userData, setUserData] = useState([]); 

  return (
    <div className='p-4'>
      <h1 className='mb-3'>Users</h1>

      {Toggle ? (
        <Register
          Toggle={Toggle}
          setToggle={setToggle}
          setUserData={setUserData}
        />
      ) : (
        <Login Toggle={Toggle} setToggle={setToggle} userData={userData}/>
      )}

      <ol className='mb-4'>
        {userData.map((user, index) => (
          <Card key={index} phone={user.mobile} email={user.email} username={user.username} />
        ))}
      </ol>

    </div>
  );
};

export default App;
