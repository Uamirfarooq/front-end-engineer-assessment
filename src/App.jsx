import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Section no 1 */}
      <section className='bg-gradient-to-r from-violet-100 to-orange-50 w-[100vw] h-[100vh] via-transparent '>
        <img
          src="../public/docker-pattern-right 3.png"
          alt="Logo"
          className="w-[537px] h-[502px] absolute right-0 opacity-80"
        />
        <img
          src="../public/docker-pattern-right 4.png"
          alt="Logo"
          className="w-[537px] h-[502px] absolute top-[319px] left-0 opacity-90 "
        />

        <div className='py-8 flex justify-center'>
          <div className='w-[80vw] h-14 relative z-20 bg-gray-50 rounded-full flex items-center justify-between p-4 border border-white'>
            <div>
              <img src="../public/logo.jpg" alt="Logo" className="h-10 w-auto mix-blend-multiply" />
            </div>
            <div className='flex justify-between w-64 font-semibold'>
              <div className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                Home
              </div>
              <div>Features</div>
              <div>Pricing</div>
              <div>Resource</div>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-4 text-white'>Contact Us</button>
          </div>
        </div>
        <div className='flex flex-col items-center mt-24'>
          <div className='flex items-center flex-col text-4xl font-bold'>
            <span className='p-2'>Revolutionize Your Hiring</span>
            <span className='p-2'>Process with <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Recruito AI</span></span>
          </div>
          <div className='flex items-center flex-col'>
            <span className='p-1'>Your fully automated hiring assistant that sources, screens, </span>
            <span className='p-1'>and interviews candidates effortlessly</span>
          </div>
          <div>
            <button className='py-2 px-4 border border-white rounded-full mt-4 mr-4'>
              Start Your Free Trial
            </button>
            <button className='border border-gray-500 mt-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-4 text-white'>
              request a demo
            </button>
          </div>
        </div>
      </section>
      {/* Section no 2 */}

      <div className=' w-[100vw] h-[100vh] flex items-center justify-center  bg-gradient-to-b from-violet-50 via-transparent '>
        <div className='w-[80vw] h-full relative bottom-20 bg-gray-200 p-6 rounded-3xl
         flex flex-col items-center '>
          <div className='pb-4 text-gray-700'>See How We Create An Autonomus Ai-Agent</div>
          <img src="./../public/Group 4.png" alt="" />
        </div>
      </div>
      {/* Section no 3 */}

      <div className=' w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className="py-12 bg-white">
          {/* Trusted By Section */}
          <div className="mb-12">
            <h2 className="text-center text-lg font-medium text-gray-700 mb-8">
              Trusted By The World Leading Organisations
            </h2>
            <div className="flex justify-center items-center flex-wrap gap-8">
              <img
                src="/path-to-logo/gsk.png"
                alt="GSK"
                className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/path-to-logo/ogilvy.png"
                alt="Ogilvy"
                className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/path-to-logo/intys.png"
                alt="Intys"
                className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/path-to-logo/linkedin.png"
                alt="LinkedIn"
                className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/path-to-logo/ogilvy.png"
                alt="Ogilvy"
                className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/path-to-logo/gsk.png"
                alt="GSK"
                className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center">
            <button className="px-6 py-2 mb-4 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              Features
            </button>
            <h3 className="text-4xl font-bold text-gray-900">
              Streamline your recruitment with <br /> our advanced features
            </h3>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
