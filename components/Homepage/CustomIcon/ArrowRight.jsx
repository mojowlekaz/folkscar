import React from "react";

export default function ArrowRight({ nextReview, color, activeReview, data }) {
  const style = {
    backgroundColor:
      activeReview < 0 || activeReview === data.length - 1
        ? "initial"
        : "#2480EA",
    border: "2px solid #2480EA",
  };
  return (
    <div>
      <div
        style={style}
        className="w-[64px] h-[64px] border-2  justify-center items-center flex  rounded-[100%]"
        onClick={nextReview}
      >
        <img src="/right.svg" />
      </div>
    </div>
  );
}
