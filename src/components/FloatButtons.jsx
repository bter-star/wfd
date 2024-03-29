import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed z-50 -right-14 top-1/2 transform -translate-y-1/2 flex  -rotate-90 gap-2 text-sm">
      <button
        onClick={() => navigate("/membership")}
        className="border border-tertiary-300 bg-tertiary-100  text-white px-4 py-2 rounded-t-sm"
      >
        Join
      </button>
      <button
        onClick={() => navigate("/donate")}
        className=" bg-accent-300  text-white px-4 py-2 rounded-t-sm"
      >
        Donate
      </button>
    </div>
  );
};

export default FloatingButtons;
