"use client";
import Image from "next/image";
import React, { useState } from "react";

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const StepperContent = [
    {
      id: "1",
      date: "October 19 — November 06 (1PM UTC)",
      context: "REGISTRATION",
      title: "Register during this time to get your Pass.",
    },
    {
      id: "2",
      date: "October 19 — November 06 (1PM UTC)",
      context: "EARLY BIRD MINT",
      title:
        "Mint now for the lowest price possible! You can mint as many Pass passes as you want – multiple passes will grant you access to the FOLKS Car Club.",
    },
    {
      id: "3",
      date: "October 19 — November 06 (1PM UTC)",
      context: "REGULAR MINT",
      title:
        "Missed the early bird mint? No problem! You may still be able to mint now. You can mint as many FOLKS Car passes as you want – multiple passes will grant you access to the FOLKS Car Club.",
    },
  ];

  const StepperImage = [
    {
      icon: "/first.svg",
      line: "/line.svg",
      alt: "first",
    },
    {
      icon: "/second.svg",
      line: "/line.svg",
      alt: "second",
    },
    {
      icon: "/third.svg",
      line: "/line.svg",
      alt: "third",
    },
  ];

  const steps = StepperContent.slice(0, 1);

  const lines = StepperImage.slice(0, 1);
  return (
    <div className="bg-black h-full  w-full py-10  flex flex-col justify-center items-center gap-2">
      <div
        className="flex flex-row justify-center items-center 
      
      "
      >
        <div className="flex justify-center flex-col gap-4 w-[522px]">
          {StepperImage.map((step, index) => (
            <div>
              <div key={index} className="flex flex-row items-center gap-2">
                <Image
                  height={100}
                  width={100}
                  src={step.icon}
                  alt={step.alt}
                />
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="">
                      <small>{StepperContent[index].date}</small>
                      <h1 className="font-bold uppercase text-white text-[32px] eurostile">
                        {StepperContent[index].context}
                      </h1>
                      <p className="text-[14px] font-[500] stepColor leading-normal">
                        {StepperContent[index].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {index < 2 && (
                <div className="relative top-2 left-[47px]">
                  <Image height={20} width={2} src={step.line} alt="line" />
                </div>
              )}
            </div>
          ))}

          {/* <div className="flex flex-row"></div> */}
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
