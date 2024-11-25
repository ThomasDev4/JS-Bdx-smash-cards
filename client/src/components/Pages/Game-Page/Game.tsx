import GameCard from "../../GameCard";
import { getRandomCards } from "../../logic";
import "./Game.css";
export type Card = {
  image: string;
  name: string;
  order: string;
};

const DIFFICULTY = 18;

export default function MemoryGame({ cards }: { cards: Card[] }) {
  const randomCards = getRandomCards(cards, DIFFICULTY);

  return (
    <main className="gridcardGame">
      {randomCards.length > 0 ? (
        randomCards.map((char, index) => (
          <GameCard key={`${char.order}-${index}`} index={index} char={char} />
        ))
      ) : (
        <p>No cards available</p>
      )}
    </main>
  );
}
