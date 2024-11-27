import { useState } from "react";
import GameCard from "./GameCard";
import type { Card } from "../Pages/Game-Page/GameLogic";

interface GameProps {
  cards: Card[];
}

export default function Game({ cards }: GameProps) {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  function handleCardClick(index: number) {

    if (flippedCards.includes(index) || matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].order === cards[secondIndex].order) {

        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  }

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <GameCard
          key={card.order}
          index={index}
          char={card}
          isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
