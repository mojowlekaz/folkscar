import React from "react";
import VerticalStepper from "./VerticalStepper";

export default function Steppershow() {
  const steps = ["Step 1 Content", "Step 2 Content", "Step 3 Content"];
  return (
    <div className="bg-blue h-full">
      <VerticalStepper />
    </div>
  );
}
