import React from "react";
import FloatingButtons from "../components/FloatButtons";

const About = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center text-3xl sm:text-6xl ">
      <FloatingButtons />
      <span className="flex sm:w-2/3 w-full justify-center border-4 sm:py-6 font-bold">
        ABOUT US
      </span>
    </div>
  );
};

export default About;