// import React, { useState } from 'react';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


    //? State variables
    const [name, setName] = useState(''); //? To track input field value
    const [displayName, setDisplayName] = useState(''); //? To show the submitted name
    const [error, setError] = useState(''); //? To show error messages
  
    //? Handle input change
    const handleInputChange = (event) => {
      setName(event.target.value);
      setError(''); //? Clear error when user starts typing
    };
  
    //? Handle submit button
    const handleSubmit = () => {
      if (name.trim() === '') {
        setError('Please enter your name.'); //? Show error if input is empty
      } else {
        setDisplayName(`Hello, ${name}!`); //? Set display name
        setName(''); //? Clear input field
      }
    };
  
    //? Handle reset button
    const handleReset = () => {
      setDisplayName(''); //? Clear the displayed name
      setError(''); //? Clear error message
      setName(''); //? Clear input field
    };
  
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>React Assignment: Simple App</h1>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          style={{height: '30px', paddingLeft: '10px',marginRight: '10px', borderRadius: '5px' }}
        />
        <button onClick={handleSubmit} style={{ padding: '8px 12px', marginRight: '10px' }}>
          Submit
        </button>
        <button onClick={handleReset} style={{ padding: '8px 12px', backgroundColor: 'greenyellow', color: 'black' }}>
          Reset
        </button>
  
        {/* Display error message */}
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
  
        {/* Display greeting */}
        {displayName && <h2 style={{ marginTop: '20px' }}>{displayName}</h2>}
       
      </div>
    );
  }


export default App
