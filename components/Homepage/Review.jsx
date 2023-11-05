"use client";
import React, { useEffect, useState } from "react";
import ArrowRight from "./CustomIcon/ArrowRight";
import ArrowLeft from "./CustomIcon/ArrowLeft";

export default function Review() {
  const data = [
    {
      id: 1,
      from: "From SOLO",
      author: "Lukman Hussain",
      review:
        " “I was really impressed with the level of service I received fromthis car rental company. The process was smooth and easy, and thecar I rented was in excellent condition. The staff was friendly andhelpful, and I felt well taken care of throughout my rental period.I would definitely recommend this company to anyone looking for apremium car rental experience.”",
    },
    {
      id: 2,
      from: "From SOLO",
      author: "Brondan Caroko",
      review:
        "“ Recommended car rental place in SOLO with professional service. The location is 'hidden', but don't worry, the car can be picked up by their personnel.“ ",
    },
    {
      id: 3,
      from: "From SOLO",
      author: "Niken Wulandari",
      review:
        "“ The best car/motorbike rental place I have ever tried in Jogja. Not only in terms of easy service, but vehicle cleanliness and vehicle condition, Esha provides the best for consumers. “",
    },
    {
      author: "Samsu Alam",
      from: "From UNS Students",
      review:
        "“ The condition of the car is clean, good and the price is really cheap to use... Anyway, really recommended... For those of you who are confused about looking for a car rental, just use this... I guarantee 100% you will be satisfied...“",
    },
    {
      author: "Fabrian Zakari",
      from: "From Kalimantan",
      review:
        "“ Car and motorbike rental in Surakarta, the place is a bit complicated, but it's easy to reach. The service is friendly, there are many choices of units to rent, prices are relatively competitive with other rentals. Well maintained unit, can be used outside the city too.“",
    },
  ];

  const [activeReview, setActiveReview] = useState(0);
  const [color, setColor] = useState(false);
  const nextReview = () => {
    if (activeReview < data.length - 1) {
      setColor(true);
      setActiveReview((prevIndex) => prevIndex + 1);
    }
  };

  const prevReview = () => {
    if (activeReview > 0) {
      setColor(false);
      setActiveReview((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-row gap-3">
      <div className="w-full flex flex-col gap-8 p-20 justify-start   bg-000000 h-full">
        <div className="flex flex-row  justify-between ">
          <h1 style={{ fontSize: "40px" }} className="font">
            What Our Customers Say
          </h1>
          <div className="flex gap-2">
            <ArrowLeft
              prevReview={prevReview}
              activeReview={activeReview}
              color={color}
            />
            <ArrowRight
              nextReview={nextReview}
              activeReview={activeReview}
              data={data}
              color={color}
            />
          </div>
        </div>

        <div>
          <p>{data[activeReview].review}</p>

          <div className="flex flex-col gap-6">
            <br />
            <div className="flex gap-2">
              <img src="profile.svg" alt={data[activeReview].author} />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[24px] mt-[5px] leading-[36px]">
                  {data[activeReview].author}
                </p>
                <p style={{ color: "#737373" }}> {data[activeReview].from}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
