import { useState } from 'react'

function App() {
  const [length, setLength] = useState(6)

  return (
    <>
    <div style={{backgroundColor:"black"}} className="w-full h-screen">
      <div className='bg-gray-300 flex flex-wrap justify-center '>
        <div className='bg-red-300'>
        <input type='text'></input>
        <button className="bg-blue-500 rounded">Copy</button>
        </div>
        <input type="range" min={6} onChange={()=>setLength((prev)=>prev+1)}/>
        <label>length({length})</label>
        <input type="checkbox">
        
        </input>
        <label>Number</label>
        <input type="checkbox">
         
        </input>
        <label>Character</label>
      </div>
    </div>
    </>
  )
}

export default App
