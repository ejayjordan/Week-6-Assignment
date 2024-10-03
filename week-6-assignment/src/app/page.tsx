import React, { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const getInput = (event: any) => {
    
  }

  return (
    <div>
    <input type="text" value={inputValue} onChange={handleChange}></input>
    <button onClick={getInput}></button>
    </div>
  );
}
