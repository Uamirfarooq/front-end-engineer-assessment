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
          fontSize: { xs: "12px", md: "14px" },
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
                padding: { xs: "5px 20px", md: "10px 40px" },
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
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Marquee>
      </div>

      {/* Features Section */}
      <div className="text-center relative mt-8 px-4">
        <img
          src="../../public/Group 23.png"
          alt="Logo"
          className="w-[30px] md:w-[43px] h-auto absolute left-0 top-[-10px] gap-0 border-t border-opacity-30"
        />
        <img
          src="../../public/Group 5.png"
          alt="Logo"
          className="w-[30px] md:w-[43px] h-auto absolute right-0 top-[-10px] gap-0 border-t border-opacity-30"
        />
        <button className="px-4 py-2 md:px-6 md:py-4 mb-6 text-sm md:text-base text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
          Features
        </button>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
          Streamline your recruitment with <br className="hidden md:block" /> our
          advanced features
        </h3>
      </div>
    </div>
  );
};

export default TrustedBySection;
