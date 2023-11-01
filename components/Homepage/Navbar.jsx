import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav className="pl-5 p-3 justify-between bg-1A1A1A flex items-center  flex-row">
        <Image height={100} width={100} src="Text.svg" />

        <ul className="font-normal text-white flex flex-row text-base  gap-5 leading-3 ">
          <li>
            <p>About Us</p>
          </li>

          <li>
            <p>Collections </p>
          </li>
          <li>
            <p>Our Services</p>
          </li>
          <li>
            <p>NFT</p>
          </li>
        </ul>

        <button className="bg-2480EA w-[138px] text-white h-[44px] flex items-center justify-center rounded-[24px]">
          Contact Us
        </button>
      </nav>
    </div>
  );
}
