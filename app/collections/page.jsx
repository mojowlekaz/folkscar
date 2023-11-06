"use client";
import BrowseCars from "@/components/Homepage/BrowseCars";
import CarUniversalCard from "@/components/Homepage/Cards/CarUniversalCard";
import vehicledata from "@/components/Homepage/Cards/Cardsjson";
import { useCategory } from "@/components/Homepage/Context/CategoryContext";
import Footer from "@/components/Homepage/Footer";
import Navbar from "@/components/Homepage/Navbar";
import Review from "@/components/Homepage/Review";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function page() {
  return (
    <div>
      <Navbar />

      <Image
        height={100}
        width={100}
        layout="responsive"
        objectfit="cover"
        src="/greencar.svg"
        alt="greencar"
      />
      <BrowseCars />
      <Review />
      <Footer />
    </div>
  );
}
