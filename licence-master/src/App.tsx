import { useState } from 'react'
import './App.css'
import HeaderBar from './components/Headerbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderBar />
    </>
  )
}

export default App
