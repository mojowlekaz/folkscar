import BrowseCars from "@/components/Homepage/BrowseCars";
import Footer from "@/components/Homepage/Footer";
import Navbar from "@/components/Homepage/Navbar";
import Image from "next/image";
import React from "react";

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
      {/* <Footer /> */}
    </div>
  );
}
