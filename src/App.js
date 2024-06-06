
import './App.css';
import React from 'react';
import NameList from './component/List';
import { useState } from 'react';
const option=["cricket","football","hockey"];
const days=["weekday","weekend"];
console.log("play");
function App() {
   const[game,setGame]=React.useState("");
   const[day,setDays]=React.useState("");

  return (
    <div className='App'>
      <h1>which game?</h1>
      {
        option.map((currVal)=>{
          console.log(currVal);
          return (
            <>
            <input type='radio' id='{currVal}' name="options" value={currVal} onChange={(e)=>setGame(e.target.value)}/>
            <label for="curVal" >{currVal}</label>
            <br/>
            </>
          );
})}
<h1>select days</h1>
    {
      days.map((currVal1)=>{
        console.log(currVal1);
        return (
          <>
          <input type='radio' id='{currVal1}' name="options" value={currVal1} onChange={(e)=>setDays(e.target.value)}/>
          <label for="curVal" >{currVal1}</label>
          <br/>
          </>
        );
      })
    }
    <p>{game}</p>
    <p>{day}</p>
    <NameList/>
    </div>
  );
}

export default App;
