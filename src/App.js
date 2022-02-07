import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e)=> {
    e.preventDefault();
    setMessage(`Welcome ${name}`)
  }

  useEffect(()=> {
    if(message){
      alert('Thanks for visiting me')
      setName('')
      setMessage('')
    }
  },[message])

  return (
    <div className="App">
      <div className="container">
        <h2>Hello User App</h2>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)}/>
          <button >¡Greet me!</button>
        </form>
        <p>{message ? message : 'Please enter your name'}</p>
      </div>
    </div>
  );
}

export default App;
