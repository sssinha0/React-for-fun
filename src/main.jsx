import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello world custom method in vite</h1>
    </div>
  )
}

const anotherElement = (<a href='https://google.com' target='_blank'>Visitt google.com</a>)
const anotheruser = "Shashi";
const customObj = React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  'click here to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <App/>
    <MyApp/>
    anotherElement
    customObj
</>
)
