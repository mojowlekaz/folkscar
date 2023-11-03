"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import VehicleDropdown from "./DropdownMenu/VehicleDropdown";
import CapacityDropdown from "./DropdownMenu/CapacityDropdown";
import RentalTypeDropdown from "./DropdownMenu/RentalTypeDropdown";

export default function BrowseCars() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Vehicle Type");
  const [showmenu, setShowMenu] = useState(false);
  const [effectActive, setEffectActive] = useState(false);

  return (
    <div className="bg-101010 mob_hid p-10  flex flex-col h-screen">
      <div className="flex flex-row  justify-around ">
        <h1 style={{ fontSize: "48px" }} className="font">
          Browse Your Needs
        </h1>
        <div className="flex gap-8 mt-[10px]">
          <VehicleDropdown />
          <CapacityDropdown />
          <RentalTypeDropdown />
        </div>
      </div>
    </div>
  );
}
