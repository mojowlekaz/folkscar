import React from "react";

const data = [
  {
    id: 1,
    image: "/stars.svg",
    title: "Qaulity Choice",
    text: "We offer a wide range of high-quality vehicles to choose from, including SUVs, vans, and others.",
  },
  {
    id: 2,
    image: "/coins.svg",
    title: "Affordable Prices",
    text: "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank.",
  },
  {
    id: 3,
    image: "/verify.svg",
    title: "Convinient Online Booking",
    text: "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.",
  },
];
export default function Services() {
  return (
    <div className="w-full p-20 flex flex-row gap-8  justify-center  bg-0F0F0F h-full">
      {" "}
      <div className="flex flex-col gap-10 items-center justify-start ">
        <h1 className="text-4xl mt-8">Our Services & Benefits</h1>
        <div>
          <div className="w-[720px] h-[58px]">
            <p className="text-center mt-2">
              To make renting easy and hassle-free, we provide a variety of
              services and advantages. We have you covered with a variety of
              vehicles and flexible rental terms.
            </p>
          </div>
        </div>
        <div className="flex  flex-row gap-5 ">
          {data.map((datas, index) => (
            <div key={index}>
              <div className="flex flex-col text-white  rounded-[9px] justify-center items-center text-center  bg-1E1E1E h-[230px] w-[400px] gap-[10px] ">
                <img src={datas.image} alt={datas.title} />
                <h1 className="fontFF">{datas.title}</h1>
                <p className="fontFF">{datas.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
