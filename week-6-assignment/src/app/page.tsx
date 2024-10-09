'use client'
import { subscribe } from 'diagnostics_channel';
import React, { useState } from 'react';

 function submitRecipies([]){
  const [inputValue, setInputValue] = useState([]);
  
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

    return [inputValue, handleChange];
  }

  export async function Array() {
    let allPosts = await submitRecipies.select().from(inputValues)
    return (
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
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
