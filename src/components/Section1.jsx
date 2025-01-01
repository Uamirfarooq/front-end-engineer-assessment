import React from 'react';

const Section1 = () => {
  return (
    <section className="bg-gradient-to-bl from-red-100 via-stone-300 to-slate-100 flex justify-center px-4">
      <div className="w-full max-w-[1000px] relative mb-36">
        {/* Background Images */}
        <img
          src="../../public/docker-pattern-right 3.png"
          alt="Background Pattern"
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[537px] lg:h-[502px] absolute  right-[-10px] md:right-[-10px] lg:right-[-15px] xl:right-[-173px] 2xl:right-[-350px] opacity-80"
        />
        <img
          src="../public/docker-pattern-right 4.png"
          alt="Background Pattern"
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[537px] lg:h-[502px] absolute top-[150px] md:top-[250px] lg:top-[319px] left-[-50px] md:left-[-100px] lg:left-[-200px] opacity-90"
        />

        {/* Navbar */}
        <div className="py-8 flex justify-center">
          <div className="w-full max-w-[90vw] lg:max-w-[80vw] h-14 relative z-20 bg-gray-50 rounded-full flex items-center justify-between px-4 lg:px-8 border border-white shadow-lg">
            <div>
              <img
                src="../public/logo.jpg"
                alt="Logo"
                className="h-8 md:h-10 w-auto mix-blend-multiply"
              />
            </div>
            <div className="hidden md:flex justify-between w-48 lg:w-64 font-semibold">
              <div className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                Home
              </div>
              <div>Features</div>
              <div>Pricing</div>
              <div>Resource</div>
            </div>
            <button className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-4 text-white">
              Contact Us
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center mt-12 md:mt-24 text-center">
          <div className="flex items-center flex-col text-2xl md:text-4xl font-bold">
            <span className="p-2">Revolutionize Your Hiring</span>
            <span className="p-2">
              Process with{' '}
              <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                Recruito AI
              </span>
            </span>
          </div>
          <div className="flex items-center flex-col text-sm md:text-base mt-4">
            <span className="p-1">
              Your fully automated hiring assistant that sources, screens,
            </span>
            <span className="p-1">and interviews candidates effortlessly</span>
          </div>
          <div className="flex flex-wrap justify-center mt-6">
            <button className="py-2 px-4 border border-white rounded-full mt-2 mr-2">
              Start Your Free Trial
            </button>
            <button className="border border-gray-500 mt-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-4 text-white">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
