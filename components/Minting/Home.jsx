import React from "react";

export default function Home() {
  const videoSource = "home.mp4";
  return (
    <div
      className="w-full bg-black h-screen p-20 relative"
      style={{
        backgroundImage: `url(${videoSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
