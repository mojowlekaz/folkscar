"use client";
import React, { useState, useEffect } from "react";
import CarUniversalCard from "./Cards/CarUniversalCard";
import vehicledata from "./Cards/Cardsjson";
import BikeUniversalCard from "./Cards/BikeUniversalCard";
import CardCategories from "./Cards/CardCategories";
import Link from "next/link";
import { useCategory } from "./Context/CategoryContext";
import CarCollections from "./CarCollections";

export default function Collections() {
  const cars = vehicledata.cars.slice(0, 3);
  const bikes = vehicledata.motorcycles.slice(0, 3);
  const car = vehicledata.cars.slice(0, 6);
  const bike = vehicledata.motorcycles.slice(0, 6);
  const { selectedCategory } = useCategory();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedCategory === "All Cars & Motorbikes") {
      setFilteredData([...cars, ...bikes]);
    } else if (selectedCategory === "Motorbikes") {
      setFilteredData(bike);
    } else if (selectedCategory === "Cars") {
      setFilteredData(car);
    } else {
      setFilteredData([]);
    }
  }, [selectedCategory, cars, bikes, car, bike]);

  return (
    <div className="w-full flex flex-col gap-8   bg-1E1E1E h-full">
      <div className="flex flex-col items-center justify-start">
        <h1 className="text-4xl mt-8">Our Impressive Collection</h1>
        <div className="w-[720px] h-[62px]">
          <p className="text-center mt-2">
            Ranging from elegant sedans to powerful sports cars, all are
            carefully selected to provide our customers with the ultimate
            driving experience.
          </p>
        </div>
      </div>
      <div className="pl-20 flex h-full w-full relative flex-row gap-[50px]">
        <CardCategories />

        <div className="content">
          <div className=" flex gap-4 flex-wrap">
            {filteredData.map((vehicle) =>
              selectedCategory === "Motorbikes" ? (
                <BikeUniversalCard key={vehicle.id} vehicle={vehicle} />
              ) : (
                <CarUniversalCard key={vehicle.id} vehicle={vehicle} />
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row text-center gap-2 mt-3 items-center">
        <Link href="/collections">
          <button className=" w-[300px] gap-2 bg-2480EA text-white h-[44px] flex justify-center items-center rounded-[34px] ">
            See all Inventory
            <img src="/right.svg" />
          </button>
        </Link>
      </div>
    </div>
  );
}
