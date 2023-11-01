import React from "react";
import Card from "./Homepage/Home";

export default function Index() {
  const cards = [
    {
      id: 1,
      image: "/pontem.png",
      description: "just testing",
    },

    {
      id: 2,
      image: "/next.svg",
      description: "just testing",
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
