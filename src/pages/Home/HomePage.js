import React from "react";
import Header from "../../components/Header/Header";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";

const cards = [
  {
    title: "User_1",
    content:
      "User 1 information. They are a mixed media artist with a focus in painting and photography",
  },
  {
    title: "User_2",
    content:
      "User 2 information. They are a musical artist who uses found sounds to create unique sonic experiences",
  },
  {
    title: "User_3",
    content:
      "User 3 information. They are a spoken word artist who has traveled the world performing at TED talks and concert halls.",
  },
  {
    title: "User_4",
    content: "User 4 information. They are a traveling adventure photographer.",
  },
];

const HomePage = () => (
  <>
    <Header />
    <div className="featured-cards-container">
      {cards.map((card) => (
        <FeaturedCard card={card} />
      ))}
    </div>
  </>
);

export default HomePage;
