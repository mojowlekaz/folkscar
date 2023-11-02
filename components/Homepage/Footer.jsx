import React from "react";
import Image from "next/image";

export default function Footer() {
  const navigationItems = [
    { text: "About Us" },
    { text: "Collections" },
    { text: "Features" },
    { text: "NFT" },
    { text: "Contact Us" },
  ];

  const socialIcons = ["instagram", "website", "facebook", "email"];
  return (
    <div>
      <nav className="pl-5 p-3 justify-between  bg-1A1A1A h-[112px] flex items-center flex-row">
        <Image height={100} width={100} src="Text.svg" />

        <ul className="font-normal text-white flex flex-row text-base gap-20 leading-3">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {socialIcons.map((icon, index) => (
            <img key={index} src={`/${icon}.svg`} alt={icon} />
          ))}
        </div>
      </nav>
    </div>
  );
}
