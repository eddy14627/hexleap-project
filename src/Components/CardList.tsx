// pages/index.tsx

import React from "react";
import Card from "./Card";

interface CardListProps {
  noOfCards: number; // Define a prop for the number of cards
}

const CardList: React.FC<CardListProps> = ({ noOfCards }) => {
  // Calculate the width of each card dynamically based on the number of cards

  // Create an array of numbers from 1 to noOfCards
  const cardNumbers = Array.from(
    { length: noOfCards },
    (_, index) => index + 1
  );

  return (
    <div>
      <div
        className={`flex ${
          noOfCards === 3 ? "justify-center items-center" : ""
        }`}
      >
        {/* Map over the array to render the desired number of cards */}
        {cardNumbers.map((cardNumber) => (
          <Card
            key={cardNumber} // Ensure each card has a unique key
            title={`Example Card ${cardNumber}`} // Use the cardNumber to dynamically generate the title
            imageUrl="/assets/1.png"
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
