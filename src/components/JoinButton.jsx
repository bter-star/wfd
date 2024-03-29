import React from "react";
import { useNavigate } from "react-router-dom";

const JoinButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/membership")}
      className="fixed z-50 right-0 top-1/2 transform -translate-y-1/2 bg-tertiary-100 -rotate-90 text-white px-4 py-2 rounded-t-sm"
    >
      Join
    </button>
  );
};

export default JoinButton;
