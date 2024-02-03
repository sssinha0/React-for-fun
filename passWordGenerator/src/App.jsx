import { useState } from 'react'

function App() {
  const [length, setLength] = useState(6)

  return (
    <>
    <div style={{backgroundColor:"black"}} className="w-full h-screen">
      <div className='bg-gray-300 grid grid-col-12 justify-center'>
        <div className='bg-red-300 col-span-12'>
        <input type='text' className='rounded-lg'></input>
        <button className="bg-blue-500 rounded p-3">Copy</button>
        </div>
        <input type="range" min={6} max={100} onChange={()=>setLength((prev)=>{if(prev<100) return prev+1; else return prev})}/>
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
