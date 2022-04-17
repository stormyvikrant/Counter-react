import { useState } from "react";
// import "./counter.css"

const Counter=()=>{
    const [counter,setCounter]=useState(0);
    
    const handleChange = (value) => {
       
      setCounter(counter + value);
    };
    const handle=(value)=>{
        setCounter(counter * value);
    }
    return (
      <div className="maindiv">
       <h3>{counter}</h3>
        <button
          onClick={() => {
            handleChange(1);
          }}
        >
          Addition
        </button>
        <button
          onClick={() => {
            handleChange(-1);
          }}
        >
          Substarction
        </button>
        <button
          onClick={() => {
            handle(2);
          }}
        >
          Double
        </button>
        <div>Number : <h3>{counter%2===0 ? "Even":"Odd"}</h3></div>
      </div>
     
    );
}

export {Counter}