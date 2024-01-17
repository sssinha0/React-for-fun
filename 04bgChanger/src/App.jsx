import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
     <div  style={{backgroundColor:color}} class="w-full h-screen px-0 py-0 m-0 bg-blue-500">
    <div className="fixed bottom-10 w-full flex flex-wrap justify-center">
      <div class="bg-white p-2">
        <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}} className='rounded-2xl text-white p-1 mx-2'>Red</button>
        <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}} className='rounded-xl text-white p-1 mx-2 '>Green</button>
        <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}} className='rounded-xl text-white p-1 mx-2'>Pink</button>
        <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}} className='rounded-xl text-white p-1 mx-2'>Blue</button>
        <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}} className='rounded-xl text-white p-1 mx-2'>Yellow</button>
      
      </div>
    </div>
    </div>
   
  )
}

export default App
