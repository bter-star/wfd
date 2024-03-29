import React from "react";

const Membership = () => {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center text-3xl sm:text-6xl ">
      <video autoPlay loop muted className="absolute w-full h-2/3 object-cover">
        <source src={"/firefighter.mp4"} type="video/mp4" />
      </video>
      <span className="relative flex sm:w-2/3 w-full justify-center border-4  sm:py-6 font-bold">
        MEMBERSHIP
      </span>
    </div>
  );
};

export default Membership;
