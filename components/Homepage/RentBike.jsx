import React from "react";

export default function RentBike() {
  return (
    <div className="flex flex-col relative  gap-3">
      <div className="bg-1E1E1E h-full  relative  gap-4   justify-around flex w-full  p-20">
        <img
          alt="image"
          layout="responsive"
          className="img"
          src="/Rectangle2.png"
        />
        <br />
        <div className="flex flex-col  relative gap-4">
          <h1 style={{ fontSize: "48px" }}>Rent A Motorbike</h1>
          <div className="p">
            <p>
              Booking a Motorbike with us is simple and easy. You can browse our
              selection of Motorbikes online, choose the motorbike that best
              fits your needs, and book it for the duration of your choice.
            </p>
            <br />
            <button className="bg-2480EA text-white w-[126px] text-[16px] h-[40px] rounded-[15px] items-center justify-center flex">
              Rent MotorBike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
