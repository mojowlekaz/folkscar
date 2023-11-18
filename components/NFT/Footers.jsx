import React from "react";

export default function Footers() {
  const styles = {
    color: "#999",
    fontSize: "14px",
  };

  const Footercontent = [
    {
      content: <span style={styles}>2023 FOLKS Car. All right reserved.</span>,
    },
    {
      content: (
        <div className="flex flex-row gap-2">
          <span style={styles}>Privacy Policy</span>
          <span style={styles}>Terms of Service</span>
        </div>
      ),
    },
  ];
  return (
    <div className="h-full bg-black px-10 gap-5 flex flex-col py-10">
      <div className="sline"></div>{" "}
      <div className="flex justify-between items-center">
        {Footercontent.map((item, index) => (
          <div key={index}>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
