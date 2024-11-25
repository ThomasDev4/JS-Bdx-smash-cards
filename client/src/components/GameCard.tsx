import { useState } from "react";
import type { Card } from "./Pages/Game-Page/Game";

interface GameCardProps {
  index: number;
  char: Card;
}

export default function GameCard({ index, char }: GameCardProps) {
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  function flipCard() {
    setIsCardFlipped(!isCardFlipped);
  }
  return (
    <figure className="gameCards" key={`${char.order}-${index}`}>
      <img
        src={`${import.meta.env.VITE_API_URL}${char.image}`}
        alt={char.name}
        onClick={() => flipCard()}
        onKeyUp={() => flipCard()}
      />
      {isCardFlipped ? (
        <img
          onClick={() => flipCard()}
          onKeyUp={() => flipCard()}
          className="background-card-flipped"
          src="/logo-smash.png"
          alt="Dos de l'image omg"
        />
      ) : null}
    </figure>
  );
}
