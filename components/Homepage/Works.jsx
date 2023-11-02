import Image from "next/image";
import React from "react";
import Caroverlay from "./carOverlay";

export default function Works() {
  const data = [
    {
      topic: "Book and Confirm",
      text: "Book your desired car with just a few clicks and receive an instant confirmation via WhatsApp.",
      icon: "/calendar.png",
    },

    {
      topic: "Browse and select",
      text: "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best..",
      icon: "/search.png",
    },

    {
      topic: "Enjoy your ride",
      text: "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.",
      icon: "/face.png",
    },
  ];
  return (
    <div className="bg-black h-[1000px] w-full flex flex-col relative gap-10 items-center">
      <div className="flex flex-col items-center justify-start h-screen">
        <h1 className="text-3xl mt-8">How it works</h1>
        <div className="w-[720px] h-[58px]">
          <p className="text-center mt-2">
            Renting a car and motorbike has never been easier. Our streamlined
            process makes it simple for you to book and confirm your vehicle of
            choice online.
          </p>
        </div>
        <br />
        <br />
        <div className="flex  flex-row relative">
          <div
            className="absolute z-1 flex smallpos1 flex-col bgfront mt-[50px] gap-2"
            style={{ right: "52%" }}
          >
            {data.map((item, id) => (
              <div
                key={id}
                className="flex w-[623px] smallwidth    h-[170px] pl-5 p-2 justify-center items-center rounded-[24px] bg-2480EA flex-col gap-2"
              >
                <div className="flex flex-row">
                  <div className="flex bg-white h-[106px] w-[57px] justify-center items-center rounded-[16px]">
                    <img
                      layout="responsive"
                      objectFit="cover"
                      style={{ width: "50%", height: "20%" }}
                      src={item.icon}
                    />
                  </div>
                  <div className="flex p-2 flex-col">
                    <h1 style={{ fontSize: "28px" }}>{item.topic}</h1>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute smallpos flex w-[740px] smallwidth2  h-[638px] justify-center items-center bg-white rounded-[24px]"
            style={{ left: "40%" }}
          >
            <img
              //   style={{ width: "90%", height: "50%" }}
              className="smallheight"
              src="/image3.png"
              alt="Car Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
