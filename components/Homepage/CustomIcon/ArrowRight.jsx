import React from "react";

export default function ArrowRight({ nextReview }) {
  return (
    <div>
      <div
        style={{ border: "2px solid #2480EA" }}
        className="w-[64px] h-[64px] border-2 bg-2480EA justify-center items-center flex  rounded-[100%]"
        onClick={nextReview}
      >
        <img src="/right.svg" />
      </div>
    </div>
  );
}
