import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        {/* Section no 1 */}
        <Section1 />
        {/* Section no 2 */}
        <Section2 />
        {/* Section no 3 */}
        <Section3 />
      </div>
    </>
  )
}

export default App
