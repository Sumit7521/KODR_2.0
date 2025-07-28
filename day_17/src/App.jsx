import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About';

const App = () => {
  const [message, setMessage] = useState('');

  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Message from child: {message}</h2>
      <About sendData={handleDataFromChild} />
    </div>
  );
};

export default App 