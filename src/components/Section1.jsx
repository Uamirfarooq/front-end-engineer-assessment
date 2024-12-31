import React from 'react'

const Section1 = () => {
  return (
    <section className='bg-gradient-to-r from-violet-100 to-orange-50 w-[100vw] h-[100vh] via-transparent '>
        <img
          src="../../public/docker-pattern-right 3.png"
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
  )
}

export default Section1
