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
        src="https://s3-alpha-sig.figma.com/img/9c3a/0ead/12a9559ed7b2ba2cd623eb0fb5579478?Expires=1700438400&Signature=n1hk5cPJc0WrNYtGSS974Ecaka5rQBsTySowFVDyD9MiA86OzAhG9WsH3y4~5ZLJDSB4J1NTgGZadnh9CW71kuLa~6u8Xz3F5qCfUSrL4TkUbqxbV8GzJ9s03kk7hlKiEx~3hSB0nYFP1zS3KsBsXxMzo0cFBksDzBBXpbURj520LENfxgNDFTmcYu7JHrkUeQ9S7t3LxrMow0on7~cdcK5MKAYsfSfFlqRWLXoCpjALR-3vOwDIGWHIbMMEm~DUAf6tO71GPoMQcNDz-BBYbTWBpZMqnioL-0ODYfPn4kB34SmUDLxkQD5B1HR5k6DhFPHpE6eDBy~Uf1UWDJcgHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="greencar"
      />
      <BrowseCars />
      <Review />
      <Footer />
    </div>
  );
}
