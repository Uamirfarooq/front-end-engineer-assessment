import React from 'react'

const Section2 = () => {
    return (
        <div className=' flex items-center flex-col justify-center  bg-gradient-to-b from-violet-50 via-transparent '>
            <div className='w-[1080px] h-full relative bottom-20 bg-gray-200 p-3 rounded-3xl
                flex flex-col items-center '>
                <img
                    src="../../public/Customers 1.png"
                    alt="Logo"
                    className="w-[212px] h-[214px] absolute  right-[-70px] top-28 object-cover gap-0  z-30"
                />
                <img
                    src="../../public/Featured Product 1.png"
                    alt="Logo"
                    className="w-[212px] h-[214px] absolute object-cover left-[-80px] top-60  gap-0  z-30"
                />
                <div className='pb-4 text-gray-700'>See How We Create An Autonomus Ai-Agent</div>
                <img src="../../public/Group 4.png" alt="" />
            </div>

        </div>
    )
}

export default Section2
