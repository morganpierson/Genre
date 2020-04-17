import React from "react";

const FeaturedCard = ({ card }) => (
  <div className="card-container">
    <h1>{card.title}</h1>
    <p>{card.content}</p>
    <style jsx>
      {`
        .card-container {
          width: 26rem;
          border-radius: 5px;
          background-color: rgba(235, 236, 240, 0.3);
          margin: 2rem 0;
          text-align: center;
          min-height: 15rem;
        }
      `}
    </style>
  </div>
);

export default FeaturedCard;
