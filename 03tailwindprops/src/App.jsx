import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  const propps = {name:"John Doe",btnTxt:"View Profile"};
  return (
    <>
    <h1 className="text-5xl font-bold underline">
    Tailwind Css
  </h1>
  <Card/>
  
  <Card className="mt-2 bg-red-500" {...propps}/>
  </>
  )
}

export default App
