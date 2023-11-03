import Collections from "@/components/Homepage/Collections";
import Footer from "@/components/Homepage/Footer";
import Home from "@/components/Homepage/Home";
import Navbar from "@/components/Homepage/Navbar";
import RentBike from "@/components/Homepage/RentBike";
import RentCar from "@/components/Homepage/RentCar";
import Review from "@/components/Homepage/Review";
import Services from "@/components/Homepage/Services";
import Works from "@/components/Homepage/Works";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <RentCar />
      <RentBike />
      <Works />
      <Collections />
      <Services />
      <Review />
      <Footer />
    </div>
  );
}
