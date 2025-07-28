import React from 'react'

const About = ({ sendData }) => {
  const handleClick = () => {
    sendData('Hello from Child!');
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
};

export default About