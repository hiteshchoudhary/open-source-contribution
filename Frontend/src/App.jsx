import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThankYou from './components/Thankyou'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThankYou/>
    </>
  )
}

export default App
