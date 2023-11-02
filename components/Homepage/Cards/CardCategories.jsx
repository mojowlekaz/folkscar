import React from "react";

export default function CardCategories() {
  const categories = [
    "All Cars & Motorbikes",
    "Motorbikes",
    "Cars",
    "Automatic Cars",
    "Manual Cars",
    "With Driver",
  ];

  const buttonStyle = {
    borderTopLeftRadius: "9px",
    borderTopRightRadius: "9px",
    borderBottom: "none",
  };

  const linkStyle = {
    textDecoration: "underline",
  };

  return (
    <div>
      <div className="categories">
        <div
          style={buttonStyle}
          className="w-[200px] h-[40px]   items-center text-center  justify-center bg-2480EA"
        >
          <p className="text-[16px]">Categories</p>
        </div>
        {categories.map((category, index) => (
          <button
            className=" w-[184px] hover:bg-black hover:text-white  border-2 border-black h-[34px] flex justify-center items-center rounded-[34px] "
            key={index}
          >
            {category}
          </button>
        ))}
        <div>
          <a style={linkStyle} href="#">
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
