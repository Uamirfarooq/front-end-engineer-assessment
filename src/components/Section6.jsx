import React from 'react'
import SubSection6 from './SubSection6'
import Button from '@mui/material/Button';


const Section6 = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <div className='flex items-center justify-center flex-col relative'>
                <img
                    src="../../public/About-Us-Hero-BG-2 1.png"
                    alt="Logo"
                    className="bg-gradient-to-t from-white to-blue-50"
                />

                <div className="absolute">
                    <SubSection6 />
                </div>


            </div>
            <Button
                variant="outlined"
                sx={{
                    borderRadius: "60px", // Equivalent to rounded-full
                    paddingX: 6,           // px-6 translates to paddingX: 6
                    marginY: 10
                }}
            >
                Testimonials
            </Button>
            <h3 className="text-4xl font-bold text-gray-900">
                Don’t just take our word for it—see  <br /> what our clients say about Recruito AI.
            </h3>
        </div>
    )
}

export default Section6
