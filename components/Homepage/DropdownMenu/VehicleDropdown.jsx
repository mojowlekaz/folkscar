"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

export default function VehicleDropdown() {
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
        {isOpen && (
          <div className="absolute w-[216px]  bg-1E1E1E rounded-b mt-[52px] z-20">
            {vehicletype.map((option) => (
              <div
                key={option.label}
                className="flex items-center py-2 px-3 cursor-pointer  hover:ml-[10px]  hover:w-[190px] hover:bg-2480EA"
                onClick={() => handleOptionSelect(option.label)}
              >
                <p> {option.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
