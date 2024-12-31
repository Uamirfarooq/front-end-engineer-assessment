import React from 'react'

const Section3 = () => {
    return (
        <div className=' w-[100vw] py-6 flex items-center justify-center'>
            <div className=" bg-white">
                {/* Trusted By Section */}
                <div className="mb-20">
                    <h2 className="text-center text-lg font-medium text-gray-700 mb-8">
                        Trusted By The World Leading Organisations
                    </h2>
                    <div className="flex justify-center items-center flex-wrap gap-28   ">
                        <img src="../../public/Rectangle 56.png" alt="" className='absolute left-20 z-20'/>
                        <img src="../../public/Rectangle 57.png" alt="" className='absolute right-20 z-20'/>
                        <img
                            src="../../public/7 2.png"
                            alt="GSK"
                            className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="../../public/19 1.png"
                            alt="Ogilvy"
                            className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="../../public/18 1.png"
                            alt="Intys"
                            className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="../../public/1 6358988.png"
                            alt="LinkedIn"
                            className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="../../public/19 1.png"
                            alt="Ogilvy"
                            className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="../../public/7 2.png"
                            alt="GSK"
                            className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="text-center">
                    <button className="px-6 py-4 mb-14 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                        Features
                    </button>
                    <h3 className="text-4xl font-bold text-gray-900">
                        Streamline your recruitment with <br /> our advanced features
                    </h3>

                </div>
            </div>
        </div>
    )
}

export default Section3
