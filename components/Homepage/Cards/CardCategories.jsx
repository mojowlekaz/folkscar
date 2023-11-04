"use client";
import React, { useState } from "react";
import CarUniversalCard from "./CarUniversalCard";
import CarCollections from "../CarCollections";
import { useCategory } from "../Context/CategoryContext";

export const categories = [
  "All Cars & Motorbikes",
  "Motorbikes",
  "Cars",
  "Automatic Cars",
  "Manual Cars",
  "With Driver",
];
export const buttonStyle = {
  borderTopLeftRadius: "9px",
  borderTopRightRadius: "9px",
  borderBottom: "none",
};

export const linkStyle = {
  textDecoration: "underline",
};

export default function CardCategories({ vehicle }) {
  const { selectedCategory, handleCategorySelect } = useCategory();

  return (
    <div>
      <div className="categories">
        <div
          style={buttonStyle}
          className="w-[200px] h-[40px]   items-center text-center  justify-center bg-2480EA"
        >
          <div className="text-[16px] flex flex-row justify-center items-center mt-[7px] text-center">
            <p> Categories</p>
          </div>
        </div>
        {categories.map((category, index) => (
          <button
            className={`w-[184px] hover:bg-black hover:text-white border-2 border-black h-[34px] flex justify-center items-center rounded-[34px] ${
              selectedCategory === category ? "bg-black text-white" : ""
            }`}
            key={index}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
        <div className="mb-[20px]">
          <a style={linkStyle} href="#">
            Terms and Conditions
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}
