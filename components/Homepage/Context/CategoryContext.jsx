"use client";
import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};

export const CategoryProvider = ({ children }) => {
  const categories = [
    "All Cars & Motorbikes",
    "Motorbikes",
    "Cars",
    "Automatic Cars",
    "Manual Cars",
    "With Driver",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, handleCategorySelect }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
