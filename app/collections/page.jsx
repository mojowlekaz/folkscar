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
        objectFit="cover"
        width={100}
        height={100}
        layout="responsive"
        src="https://s3-alpha-sig.figma.com/img/9c3a/0ead/12a9559ed7b2ba2cd623eb0fb5579478?Expires=1704067200&Signature=Bllcll7J1yiMNcNmd8~x0wC6KjdRXjx2M5osjirx5ZNM7f19t2neAzhBkIwN51X9N78WjIBB1l4fhcGTw205UDGwSHolFGr3lcsYS0GEoqMSwkqHTUAN81-NQkJYN-N3t0HXoNb3lXkRArv1YTujT3GIxKYasCx-5cDZeyGGfOpJuTzvjJTJmEqmS4KUetQd6-Z1mdzqE2hKvfvcvMU~R9fytewtM3ZoPyRTCTHmQVlca5Zt--F9RU1~T77vN-aC7vmUQEq4EIs9tkaXhiHB~A-DbzayihIfH9K7pcYWNIn6V1p~ZKjfC-avbUTVNAoYEp0PvT5JpsUHutpiwc8~NA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="greencar"
      />
      <BrowseCars />
      <Review />
      <Footer />
    </div>
  );
}
