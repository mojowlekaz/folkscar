import React from "react";

const Home = () => {
  return (
    <div className="relative flex py-8 h-screen w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute justify-center items-center flex top-0 left-0 object-cover w-full h-full"
      >
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center justify-center">
        <div className="relative z-10  flex flex-col gap-4  p-20 w-[576px] text-white">
          <h1 className=" font-bold eurostile  flex  items-center text-[100px] leading-[93px] ">
            EARLY
          </h1>
          <h1 className=" font-bold eurostile  flex  items-center text-[100px] leading-[93px] ">
            ACCESS
          </h1>
          <p className="text-[24px] eurostilep  leading-normal font-bold">
            JOIN NOW TO PARTICIPATE IN THE EXCLUSIVE MINT
          </p>
          <br />
          <div className="flex gap-4">
            {" "}
            <button className="eurostile bg-0073F0 justify-center flex gap-[10px] items-center w-[197px] h-[44px]">
              <p className="text-[15px] eurostile uppercase  leading-normal font-bold">
                {" "}
                Join Waitlist
              </p>
            </button>
            <button className="eurostile bg-none border-2 justify-center flex gap-[10px] items-center w-[197px] h-[44px]">
              <p className="text-[15px] eurostile uppercase  leading-normal font-bold">
                {" "}
                Learn More
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
