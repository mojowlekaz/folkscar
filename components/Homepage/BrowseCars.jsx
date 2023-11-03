"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

export default function BrowseCars() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Vehicle Type");
  const [showmenu, setShowMenu] = useState(false);
  const [effectActive, setEffectActive] = useState(false);

  const vehicletype = [{ label: "cars" }, { label: "Motorbike" }];

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleEffectChange = (isActive) => {
    setEffectActive(isActive);
  };
  const handleshowmenu = () => {
    setShowMenu(true);
  };

  const handlehidemenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="bg-101010 mob_hid p-8 flex flex-col">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col  gap-2">
          <div
            className="w-[216px] h-[34px] p-5 bg-101010 justify-between outline-none cursor-pointer flex items-center no-outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p style={{ color: "#fff", fontSize: "16px" }}> {selectedOption}</p>
            <FiChevronDown
              style={{ color: "#fff", fontSize: "16px" }}
              className={`ml-2 transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </div>
          <div className="w-[216px] opacity-5  bg-white border-[0.1rem]" />
        </div>
        {/* {isOpen && (
            <div className="absolute w-[130px] border border-gray-300 bg-white rounded-b mt-1 z-20">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect(option.value)}
                >
                  <img
                    src={option.image}
                    alt={option.value}
                    className="h-4 w-4 mr-2"
                  />
                  {option.label}
                </div>
              ))}
            </div>
          )} */}
      </div>
    </div>
  );
}
