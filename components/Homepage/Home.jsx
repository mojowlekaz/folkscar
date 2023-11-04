import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full custom-bg flex w-full">
      <div className="flex ">
        <Image
          alt="Car Image"
          layout="fill"
          objectFit="cover"
          src="/lines.svg"
          style={{ opacity: 0.1 }}
        />
      </div>
      <div className="flex ">
        <div
          className="flex p-20 gap-8 relative  flex-col "
          style={{ marginTop: "40px" }}
        >
          <h1
            className="fixed-text"
            style={{ color: "white", fontWeight: "700" }}
          >
            Discover the world on wheels with our rental service
          </h1>
          <div>
            <p>
              Choose from a wide range of cars that fit your style and budget.
              Experience the freedom of the open road with our reliable and
              efficient rental service.
            </p>
          </div>
          <div className="flex flex-row relative gap-5">
            <button className="bg-2480EA text-white text-[18px] w-[135px] h-[46px] rounded-[8px] items-center justify-center flex">
              Rent Car
            </button>
            <button className="bg-transparent borderC text-[18px]  text-white w-[144px] h-[46px] rounded-[6px] items-center justify-center flex">
              Rent Bike
            </button>
          </div>
        </div>
        <img
          className="bgBack"
          alt="Car Image"
          src="/carbg.png"
          style={{ maxWidth: "50%", width: "auto", maxHeight: "960px" }}

          //   layout="responsive"
          //   src="https://s3-alpha-sig.figma.com/img/1b71/1da1/1ac8690ffa56fa835a13373220d3375f?Expires=1699833600&Signature=Fu2Vyzu~UilR4LJqZGn9u~cYC637DCIZQmNaNDBpWPWi9VZawfUAMzzCrLMBgODjnyjmQoCVz04jU2a09XE~DoVIXd3~Aqi49KHhqHkIA7q~ZUxPfhQvYpE2GoV33nN25ddxBztCId7CGV6EaU-gJh3~ysXC5QI75HC4eNckreQ~dtgWdgpUvUVt~dQyOlc3VV6q~bWSZNSyhAzbhVBwPJDZgOSEqi23WiddTMNTPbk0IkPWgt6FAyYIeXqY5v9c4eeP14WCeNCuXhm5w4RSdaSFlOfxDpcTtpMHn0iBTCaZ0fES4dnWHgRvEeS9pZ7PsbGsjLhJs6KXMfGEK5HDNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    </div>
  );
}
