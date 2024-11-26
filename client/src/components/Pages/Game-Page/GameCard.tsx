import type { Card } from "./GameLogic";

interface GameCardProps {
  index: number;
  char: Card;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export default function GameCard({
  index,
  char,
  isFlipped,
  isMatched,
  onClick,
}: GameCardProps) {
  return (
    <figure
      className={`gameCards ${isMatched ? "matched" : ""}`}
      key={`${char.order}-${index}`}
    >
      {isFlipped || isMatched ? (
        <img
          src={`${import.meta.env.VITE_API_URL}${char.image}`}
          alt={char.name}
          className={isMatched ? "opacity-50" : ""}
        />
      ) : (
        <img
          onClick={onClick}
          onKeyUp={onClick}
          className="background-card-flipped"
          src="/public/smash_card_1.jpg"
          alt="Dos de l'image omg"
        />
      )}
    </figure>
  );
}
