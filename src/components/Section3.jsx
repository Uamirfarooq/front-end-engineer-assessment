import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

// Import assets or use direct paths if they're in the public folder
import intys from "../assets/intys.png";
import gsk from "../assets/gsk.png";
import linkedin from "../assets/linkedin.png";
import ovilgry from "../assets/ovilgry.png";

const TrustedBySection = () => {
    const partners = [intys, gsk, linkedin, ovilgry];
    return (
        <div className="mb-12 py-5">
            {/* Section Heading */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontFamily: "Instrument Sans, sans-serif",
                    fontSize: "14px",
                    color: "#3E4757",
                    fontWeight: "500",
                    py: 3,
                }}
            >
                Trusted By The World Leading Organisations
            </Typography>

            {/* Marquee Component */}
            <div>
                <Marquee autoFill={true} gradient={true} speed={40} pauseOnHover={true}>
                    {partners.map((partner, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: "10px 40px",
                                marginRight: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={partner}
                                alt={`Partner ${index + 1}`}
                                style={{
                                    width: "92px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    ))}
                </Marquee>
            </div>
            <div className="text-center relative">
                <img
                    src="../../public/Group 23.png"
                    alt="Logo"
                    className="w-[43px] h-[42.37px] absolute  gap-0 border-t border-opacity-30 "
                />
                <img
                    src="../../public/Group 5.png"
                    alt="Logo"
                    className="w-[43px] h-[42.37px] absolute right-0 gap-0 border-t border-opacity-30 "
                />

                <button className="px-6 py-4 mb-14 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                    Features
                </button>
                <h3 className="text-4xl font-bold text-gray-900">
                    Streamline your recruitment with <br /> our advanced features
                </h3>

            </div>
        </div>
    );
};

export default TrustedBySection;

// import React from 'react'

// const Section3 = () => {
//     return (
//         <div className=' w-[100vw] py-6 flex items-center justify-center'>
//             <div className=" bg-white">
//                 {/* Trusted By Section */}
//                 <div className="mb-20">
//                     <h2 className="text-center text-lg font-medium text-gray-700 mb-8">
//                         Trusted By The World Leading Organisations
//                     </h2>
//                     <div className="flex justify-center items-center flex-wrap gap-28   ">
//                         <img src="../../public/Rectangle 56.png" alt="" className='absolute left-20 z-20' />
//                         <img src="../../public/Rectangle 57.png" alt="" className='absolute right-20 z-20' />
//                         <img
//                             src="../../public/7 2.png"
//                             alt="GSK"
//                             className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
//                         />
//                         <img
//                             src="../../public/19 1.png"
//                             alt="Ogilvy"
//                             className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
//                         />
//                         <img
//                             src="../../public/18 1.png"
//                             alt="Intys"
//                             className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
//                         />
//                         <img
//                             src="../../public/1 6358988.png"
//                             alt="LinkedIn"
//                             className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
//                         />
//                         <img
//                             src="../../public/19 1.png"
//                             alt="Ogilvy"
//                             className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
//                         />
//                         <img
//                             src="../../public/7 2.png"
//                             alt="GSK"
//                             className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
//                         />
//                     </div>
//                 </div>

//                 {/* Features Section */}
//                 <div className="text-center relative">
//                     <img
//                         src="../../public/Group 23.png"
//                         alt="Logo"
//                         className="w-[43px] h-[42.37px] absolute  gap-0 border-t border-opacity-30 "
//                     />
//                     <img
//                         src="../../public/Group 5.png"
//                         alt="Logo"
//                         className="w-[43px] h-[42.37px] absolute right-0 gap-0 border-t border-opacity-30 "
//                     />

//                     <button className="px-6 py-4 mb-14 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
//                         Features
//                     </button>
//                     <h3 className="text-4xl font-bold text-gray-900">
//                         Streamline your recruitment with <br /> our advanced features
//                     </h3>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Section3
