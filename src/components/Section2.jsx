import React from 'react'

const Section2 = () => {
    return (
        <div className=' w-[100vw] h-[100vh] flex items-center flex-col justify-center  bg-gradient-to-b from-violet-50 via-transparent '>
                <img
                src="../../public/Customers 1.png"
                alt="Logo"
                className="w-[212px] h-[214px] absolute right-11 top-[646px]  object-cover gap-0  z-30"
            />
            <img
                src="../../public/Featured Product 1.png"
                alt="Logo"
                className="w-[212px] h-[214px] absolute object-cover left-14 top-[780px]  gap-0  z-30"
            />
            <div className='w-[80vw] h-full relative bottom-20 bg-gray-200 p-3 rounded-3xl
                flex flex-col items-center '>
                <div className='pb-4 text-gray-700'>See How We Create An Autonomus Ai-Agent</div>
                <img src="../../public/Group 4.png" alt="" />
            </div>

        </div>
    )
}

export default Section2
