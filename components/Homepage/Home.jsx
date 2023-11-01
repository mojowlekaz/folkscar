import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen custom-bg flex w-full">
      <div className="flex ">
        <Image
          alt="Car Image"
          layout="fill"
          objectFit="cover"
          src="/lines.svg"
          style={{ opacity: 0.1 }} // Adjust the opacity value as needed
        />
      </div>
      <div className="flex ">
        <div className="flex p-20  justify-center ">
          <h1
            className="fixed-text"
            style={{ color: "white", fontWeight: "700" }}
          >
            Discover the world on wheels with our rental service
          </h1>
        </div>
        <img
          className="bgBack"
          alt="Car Image"
          src="/carbg.png"
          style={{ maxWidth: "50%" }}
          //   layout="responsive"
          //   src="https://s3-alpha-sig.figma.com/img/1b71/1da1/1ac8690ffa56fa835a13373220d3375f?Expires=1699833600&Signature=Fu2Vyzu~UilR4LJqZGn9u~cYC637DCIZQmNaNDBpWPWi9VZawfUAMzzCrLMBgODjnyjmQoCVz04jU2a09XE~DoVIXd3~Aqi49KHhqHkIA7q~ZUxPfhQvYpE2GoV33nN25ddxBztCId7CGV6EaU-gJh3~ysXC5QI75HC4eNckreQ~dtgWdgpUvUVt~dQyOlc3VV6q~bWSZNSyhAzbhVBwPJDZgOSEqi23WiddTMNTPbk0IkPWgt6FAyYIeXqY5v9c4eeP14WCeNCuXhm5w4RSdaSFlOfxDpcTtpMHn0iBTCaZ0fES4dnWHgRvEeS9pZ7PsbGsjLhJs6KXMfGEK5HDNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    </div>
  );
}
