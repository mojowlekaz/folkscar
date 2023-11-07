"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import VehicleDropdown from "./DropdownMenu/VehicleDropdown";
import CapacityDropdown from "./DropdownMenu/CapacityDropdown";
import RentalTypeDropdown from "./DropdownMenu/RentalTypeDropdown";
import CarUniversalCard from "@/components/Homepage/Cards/CarUniversalCard";
import vehicledata from "@/components/Homepage/Cards/Allcars";
import { useCategory } from "@/components/Homepage/Context/CategoryContext";
import BikeUniversalCard from "./Cards/BikeUniversalCard";

export default function BrowseCars() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Vehicle Type");
  const [showmenu, setShowMenu] = useState(false);
  const [effectActive, setEffectActive] = useState(false);
  const cars = vehicledata.cars.slice(0, 9);
  const bikes = vehicledata.motorcycles.slice(0, 5);

  return (
    <div className="bg-101010 mob_hid p-10 gap-2 flex flex-col h-full">
      <div className="flex flex-row justify-around">
        <h1 style={{ fontSize: "48px", margin: "0" }} className="font">
          Browse Your Needs
        </h1>
        <div className="flex flex-row justify-around gap-8 mt-3">
          <div className="flex gap-8">
            <VehicleDropdown />
            <CapacityDropdown />
            <RentalTypeDropdown />
          </div>
        </div>
      </div>
      <div className="flex flex-row   gap-5  flex-wrap">
        {cars.map((car) => (
          <CarUniversalCard key={car.id} vehicle={car} />
        ))}

        {bikes.map((bike) => (
          <BikeUniversalCard key={bike.id} vehicle={bike} />
        ))}
      </div>
    </div>
  );
}
