import { useState } from 'react'
import Header from './Components/Header'
import MainContainer from './Components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <MainContainer />
    </>
  )
}

export default App
