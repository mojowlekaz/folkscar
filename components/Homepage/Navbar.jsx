import React from "react";
import Image from "next/image";

export default function Navbar() {
  const navigationItems = ["About Us", "Collections", "Our Services", "NFT"];

  return (
    <div>
      <nav className="px-5 h-[88px] justify-between bg-1A1A1A flex items-center flex-row">
        <Image height={100} width={100} src="Text.svg" />

        <ul className="font-normal text-white flex flex-row text-base gap-5 leading-3">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <button className="bg-2480EA w-[138px] text-white h-[44px] flex items-center justify-center rounded-[24px]">
          Contact Us
        </button>
      </nav>
    </div>
  );
}
