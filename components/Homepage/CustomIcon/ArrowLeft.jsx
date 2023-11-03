import React from "react";

export default function ArrowLeft({ prevReview, color }) {
  const style = {
    backgroundColor: color === false ? "#2480EA" : "initial",
    border: "2px solid #2480EA",
  };
  return (
    <div>
      <div
        style={style}
        className="w-[64px] h-[64px] border-2  justify-center items-center flex  rounded-[100%]"
        onClick={prevReview}
      >
        <img src="/left.svg" />
      </div>
    </div>
  );
}
