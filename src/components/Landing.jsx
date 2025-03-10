import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-5 justify-center max-h-[100vh] bg-[url(/background_banner.jpg)] bg-cover ">
      <div className=" absolute z-50 top-[40%]">
        <div className="flex  flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold text-white text-center">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-xl text-center">Watch anywhere. Cancel anytime.</p>

          <button
            className="bg-red-500 py-2 px-5 rounded"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </div>
  );
};

export default Landing;
