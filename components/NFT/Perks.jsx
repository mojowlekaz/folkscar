import React from "react";

export default function Perks() {
  const images = [
    {
      icon: "/access.svg",
      alt: "acesss",
      title: "Access",
      topic: "Membership to take part in FOLKS governance",
    },
    {
      icon: "/immersive.svg",
      alt: "immersive",
      title: "Immersive",
      topic: "Enjoy exclusive adventures with FOLKS Car Assets.",
    },
    {
      icon: "/ticket.svg",
      alt: "Ticket",
      title: "Ticket",
      topic: "Become one of the earliest FOLKS community members",
    },
    {
      icon: "/boost.svg",
      alt: "Boosts",
      title: "Boosts",
      topic: "Supercharge Your FOLKS Journey",
    },
  ];

  return (
    <div>
      <div className="flex gap-[140px] flex-col px-40   h-full bg-black  justify-center items-center">
        <br />

        <h1 className="font-bold eurostile text-[32px] leading-[44px]">
          Perks of Ownership
        </h1>

        <div className="perks  relative flex justify-around items-center flex-row gap-3 border-0"></div>

        <div
          className="flex w-full flex-row justify-around border-0 items-center"
          style={{
            position: "relative",
            transform: "translateY(-400px)", // Adjust the value based on your preference
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="cont justify-around items-center h-full  border-0  flex"
              style={{ zIndex: 999 }}
            >
              <div className="flex flex-col  justify-around items-center">
                <img
                  src={img.icon}
                  alt={img.alt}
                  // className="object-cover w-full h-full rounded-md"
                  style={{ zIndex: 1000, position: "relative" }}
                />

                <div className="relative flex flex-col items-center text-center  gap-4">
                  <p className="eurostile">{img.title}</p>
                  <div className="w-[190px] h-[68px]">
                    <p className="flex text-[14px] text-center justify-center items-center">
                      {img.topic}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          float: "left",
          left: 8,
        }}
      >
        <img
          src="/card.svg"
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            top: -70, // Adjust this value to move the image up or down
            bottom: 0,
            zIndex: 1,
            left: 8,
          }}
          alt="icon"
        />
      </div>
    </div>
  );
}
