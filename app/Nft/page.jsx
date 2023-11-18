import Home from "@/components/NFT/Home";
import Navbar from "@/components/Minting/Navbar";
import React from "react";
import Perks from "@/components/NFT/Perks";
import Works from "@/components/NFT/Works";
import Steppershow from "@/components/NFT/Steppershow";
import VerticalStepper from "@/components/NFT/VerticalStepper";
import Faqs from "@/components/NFT/Faqs";
import Footers from "@/components/NFT/Footers";
import Socials from "@/components/NFT/Socials";

export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Perks />
      <Works />
      <VerticalStepper />
      <Faqs />
      <Socials />
      <Footers />
    </div>
  );
}
