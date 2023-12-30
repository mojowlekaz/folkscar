import Navbar from "@/components/Allowlist/Navbar";
import Footers from "@/components/NFT/Footers";
import Home from "@/components/NFT/Home";
import Socials from "@/components/NFT/Socials";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Socials />
      <Footers />
    </div>
  );
}
