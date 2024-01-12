import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15);
  const addCounter = () =>{
    if(counter<21)
    setCounter(counter+1);
  }
  const removeCounter = ()=>{
    if(counter>0)
    setCounter(counter-1);
  }
  return (
    <>
    <div>Counter Application 0 to 20 only</div>
    <button style={{backgroundColor:'grey',marginBottom:10}} onClick={addCounter}>Add Counter {counter}</button>
    <br/>
    <button  style={{backgroundColor:'grey',marginBottom:10}} onClick={removeCounter}>Remove Counter {counter}</button>
    <footer>Footer {counter}</footer>
    </>
  )
}

export default App
