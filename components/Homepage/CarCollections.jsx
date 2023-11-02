import React from "react";
import CarUniversalCard from "./Cards/CarUniversalCard";
import vehicledata from "./Cards/Cardsjson";
import BikeUniversalCard from "./Cards/BikeUniversalCard";
import CardCategories from "./Cards/CardCategories";

export default function CarCollections() {
  const cars = vehicledata.cars.slice(0, 6);
  return (
    <div>
      <div className=" flex gap-4 flex-wrap">
        {cars.map((car) => (
          <CarUniversalCard key={car.id} vehicle={car} />
        ))}
        {/* {bikes.map((bike) => (
          <BikeUniversalCard key={bike.id} vehicle={bike} />
        ))} */}
      </div>
    </div>
  );
}
