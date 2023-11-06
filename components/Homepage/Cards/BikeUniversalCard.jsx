import React from "react";

export default function BikeUniversalCard({ vehicle }) {
  return (
    <div>
      <div className="w-[316px] p-3 bg-white  h-[476px] flex flex-col rounded-[24px] gap-[10px] ">
        <img src={vehicle.image} alt={vehicle.name} />
        <p className="text-black text-[16px] opacity-[80%] font-bold">
          {vehicle.name}
        </p>
        <div className="flex flex-row">
          <h1 className="fontF" style={{ fontSize: "32px", color: "#000" }}>
            {vehicle.price}
          </h1>
          <p className="text-black text-opacity-50 mt-[10px]">/Day</p>
        </div>

        <div className="flex bg-F6F6F6 w-[300px] h-[60px] rounded-[16px] justify-center mt-[30px] gap-7 items-center">
          {" "}
          {vehicle.iconsWithNames &&
            vehicle.iconsWithNames.map((item) => (
              <div
                className="flex flex-col gap-1  items-center justify-center text-center"
                key={item.id}
              >
                <img src={item.icon} alt={item.name} />
                <p className="text-black  text-[12px]  text-center">
                  {item.name}
                </p>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-5 items-center">
          <button className=" w-[300px] hover:bg-2480EA hover:text-white hover:border-none  border-2 border-black h-[44px] flex justify-center items-center rounded-[34px] ">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
