import React from "react";

export default function ArrowLeft({ prevReview }) {
  return (
    <div>
      <div
        style={{ border: "2px solid #2480EA" }}
        className="w-[64px] h-[64px] border-2  justify-center items-center flex  rounded-[100%]"
        onClick={prevReview}
      >
        <img src="/left.svg" />
      </div>
    </div>
  );
}
