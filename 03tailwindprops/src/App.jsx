import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-5xl font-bold underline">
    Tailwind Css
  </h1>
  <Card/>
  </>
  )
}

export default App
