import React from "react";
import Image from "next/image";

export default function Navbar() {
  const navigationItems = ["ALLOWLIST", "ABOUT", "DOCS", "FAQ", "MINT"];

  return (
    <div>
      <nav className="px-7 h-[80px] justify-between bg-black flex items-center flex-row">
        <div className="flex gap-1">
          <Image height={50} width={50} src="Icon.svg" />
          <img style={{ width: "100%", height: "100%" }} src="folks.svg" />
        </div>

        <ul className="font-normal text-white btnmint flex flex-row text-base gap-7 leading-3">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <p className="btnmint font-bold leading-[24px] text-[16px] ">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <button className="bg-black w-[186px] border-2  text-white border-0073F0  h-[44px] flex items-center justify-center leading-[24px] font-bold text-[16px] rounded-[4px]">
          CONNECT WALLET
        </button>
      </nav>
    </div>
  );
}
