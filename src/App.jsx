import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Footer from './components/Footer'
import Section5 from './components/Section5'

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
        {/* Section no 4 */}
        <Section4 />
        {/* Section no 5 */}
        <Section5 />

        {/* Section no 6 */}
        <Section6 />
        {/* Section no 7*/}
        <Section7 />
        {/* Section no 8 */}
        <Section8 />
        <Footer />
      </div>
    </>
  )
}

export default App
