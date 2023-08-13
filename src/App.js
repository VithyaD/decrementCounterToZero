import React, { useEffect } from 'react';
import {useState} from "react";
import './App.css';


export default function App() {
  const [input, setInput] = useState();
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);
  const [enable, setEnable] = useState(false);
  let intervalId= null;
 
const handleChange =(e) =>{
  setEnable(true);
  setInput(e.target.value);
  setTimer(e.target.value);
}

  useEffect(() => {
    if(active){
      intervalId= setInterval(() => {setTimer(prev=>prev-1)},1000);
      if(timer===0){
        setEnable(false);
        clearInterval(intervalId);
        setActive(!active)
      }
    } else {
      clearInterval(intervalId);
    }
    return () => {
      if(intervalId !=0) 
      clearInterval(intervalId);
      
    }
  },[active,timer]);

 
return (
    <div className="App">
      <input type="number" className="form-control" value={input} placeholder="Enter a number" onChange={(e)=>{handleChange(e)}}/>
      <div className="form-group row">
    <div className="col-sm-10">
      <button type="button" className={`btn btn-primary btn-${active?`stop`:`start`} ${!enable?`disabled`:``}`} id="button" onClick={() => setActive(!active)}>{active?`Stop`:`Start`}</button>
      </div>
  </div>
     <div id="display-timer">Clock: <strong>{timer}</strong></div>
      </div>
  );
}