import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [size, setSize] = useState(window.innerWidth)
  const [mouse, setMouse] = useState('white')

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  const checkMouse = () => {
    // if (mouse === 'white') {
    //   setMouse('red')
    // } else {
    //   setMouse('white')
    // }
    setInterval(setMouse('red'), 3000)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    window.addEventListener('mousemove', checkMouse)
    console.log(mouse)
    return () => {
      window.removeEventListener('resize', checkSize)
      window.removeEventListener('mousemove', checkMouse)
    }
  })
  return (
    <div className='container' style={{ backgroundColor: `${mouse}` }}>
      <h1>Hi,how are you? your screen size is {size} px</h1>
      <button
        onClick={() => {
          window.alert('CLicked')
        }}
      >
        Click me
      </button>
    </div>
  )
}

export default App
