import React from "react";
import Image from "next/image";

export default function RentCar() {
  return (
    <div className="flex flex-col relative  gap-3">
      <div className="bg-1E1E1E h-full justify-around flex w-full rent p-20">
        <div className="flex flex-col  relative gap-4">
          <h1 style={{ fontSize: "48px" }}>Rent A Car</h1>
          <div className="p">
            <p>
              Booking a self-driving car with us is simple and easy. You can
              browse our selection of vehicles online, choose the car that best
              fits your needs, and book it for the duration of your choice.
            </p>
            <br />
            <button className="bg-2480EA text-white w-[96px] text-[16px] h-[30px] rounded-[8px] items-center justify-center flex">
              Rent Car
            </button>
          </div>
        </div>
        <img
          alt="image"
          layout="reponsive"
          className="img"
          src="/Rectangle1.png"
        />
      </div>
    </div>
  );
}
