import React from "react";

export default function works() {
  const text = [
    {
      text: "Purchase a VSP and join our Discord to instantly become part of a passionate community of sports and NFT enthusiasts.",
    },
    {
      text: "Receive unique token-gated experiences including gas-only mints for curated NFT collections, Giveaways, POAP rewards and private Discord channel access.",
    },
    {
      text: "Sit back, relax, and enjoy the benefits of FOLKS ownership, from governance involvement to immersive experiences and watch as your NFT becomes a ticket to a community-driven, exciting journey.",
    },
  ];
  return (
    <div>
      <div className="p-20 flex flex-col gap-2 bg-060606 h-full">
        <h1 className="font-bold text-[32px] eurostile leading-normal">
          HOW IT WORKS
        </h1>
        <div className="gap-3 flex flex-col relative">
          {text.map((texts, index) => (
            <div key={index}>
              <p>{texts.text}</p>
            </div>
          ))}
        </div>
        <br />
        <div className="flex justify-center items-center">
          <h1 className="eurostile font-bold text-[32px] text-center">
            FFC is your pass to the pros and an unprecedented Business and NFT
            experience.
          </h1>
        </div>
      </div>
    </div>
  );
}
