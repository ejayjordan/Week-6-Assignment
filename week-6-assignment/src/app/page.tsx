import React, { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
    <input type="text" value={inputValue} onChange={handleChange}></input>
    <button></button>
    </div>
  );
}
