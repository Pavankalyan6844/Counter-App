import { useState } from "react";
import './App.css'
function App() {

const [count,setCount] = useState(0);
  
function increase(){
  setCount(prevcount=>prevcount+1)
  if(count == 10 ){
    alert("Great! Count is above 10")
  }
}
function decrease(){
  if(count>0){
    setCount(count-1)
  }
}
function reset(){
  setCount(0)
}

return (
    <>
    <div className="counter-container">

    <h1 className="counter-title">Counter App</h1>
    <h2 className="counter-display">{count}</h2>
    
    <div className="button-group">
      <button className="btn btn-increase" onClick={increase}>Increase</button>
      <button className="btn btn-decrease" onClick={decrease}>Decrease</button>
      <button className="btn btn-reset" onClick={reset} disabled={count === 0}>Reset</button>
    </div>
    <div className="current-status-box">
      <h3 className="status-title">Current Status</h3>
      <div className="status-msg"
      style={{color:count> 0 ? "lightgreen": count === 0 ? "white" : "red"}}
      >
        {count > 0 ? "😊Positive" : count === 0 ? "😐 Zero" : "😢 Negative"}
      </div>
    </div>

    </div>
    
   
  
    </>
  )
}

export default App
