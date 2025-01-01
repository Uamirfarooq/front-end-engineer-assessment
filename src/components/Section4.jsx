import React from "react";

const Section4 = () => {
    return (
        <div className="w-[100vw] py-6 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 px-44">
                {/* Box 1 */}
                <div className="w-[482px] flex flex-col justify-center ">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Candidate Sourcing & Job Posting
                    </h2>
                    <p className="text-lg text-gray-600">
                        Recruito automatically posts your position or actively hunts top
                        candidates across multiple platforms. No human intervention needed.
                    </p>
                </div>
                {/* Box 2 */}
                <div className="w-[480px] h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg relative ">
                <img
                    src="../../public/Gabrun-Minutes-BG 1.png"
                    alt="Logo"
                    className=" h-[150px] absolute right-0 top-0 object-contain gap-0  z-30"
                />
                <img
                    src="../../public/Group 10.png"
                    alt="Logo"
                    className=" h-[280px] absolute left-5 top-16   object-contain gap-0  z-30"
                />
                <img
                    src="../../public/Group 8.png"
                    alt="Logo"
                    className=" h-[350px]  absolute z-50 top-8 object-contain gap-0 "
                />
                <img
                    src="../../public/Group 9.png"
                    alt="Logo"
                    className=" h-[280px] absolute right-5 top-16  object-contain gap-0  z-30"
                />

                </div>
                {/* Box 3 */}
                <div className="w-[480px] h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800">Box 3</h3>
                    <p className="text-sm text-gray-600">Description for box 3</p>
                </div>
                {/* Box 4 */}
                <div className="w-[482px] flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Automated Resume Screening & Filtering
                    </h2>
                    <p className="text-lg text-gray-600">
                    Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants.
                    </p>
                </div>
                {/* Box 5 */}
                <div className="w-[482px] flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Online Assessment
                    </h2>
                    <p className="text-lg text-gray-600">
                    Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated.
                    </p>
                </div>
                {/* Box 6 */}
                <div className="w-[480px] h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800">Box 6</h3>
                    <p className="text-sm text-gray-600">Description for box 6</p>
                </div>
                {/* Box 7 */}
                <div className="w-[480px] h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800">Box 7</h3>
                    <p className="text-sm text-gray-600">Description for box 7</p>
                </div>
                {/* Box 8 */}
                <div className="w-[482px] flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    AI Video Interviews
                    </h2>
                    <p className="text-lg text-gray-600">
                    An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free.
                    </p>
                </div>
                {/* Box 9 */}
                <div className="w-[482px] flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Final Shortlist for the Line Manager
                    </h2>
                    <p className="text-lg text-gray-600">
                    Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision.
                    </p>
                </div>
                {/* Box 10 */}
                <div className="w-[480px] h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800">Box 10</h3>
                    <p className="text-sm text-gray-600">Description for box 10</p>
                </div>
            </div>
        </div>
    );
};

export default Section4;
