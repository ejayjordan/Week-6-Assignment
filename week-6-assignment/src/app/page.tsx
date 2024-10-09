'use client'
import React, { useState } from 'react';

 function submitRecipies([]){
  const [inputValue, setInputValue] = useState([]);
  
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

    return [inputValue, handleChange];
  }

  export default function Home() {
    const [inputValues, handleChange] = submitRecipies(["name"]);

    const getInput = (event: any) => {
      event.preventDefault();
      console.log(inputValues)
    };

  return (
    <div>
      <form onSubmit={getInput}>
    <input type="text" name="name" value={inputValues} onChange={handleChange}></input>
    <button type="submit">Submit</button>
    <p>You entered: {inputValues}</p>    
      </form>
    </div>
  );
}
