import { useLoaderData } from "react-router-dom";
import MemoryGame, { type Card } from "./GameLogic";
import Timer from "./Timer";

export default function GamePage() {
  const cards: Card[] = useLoaderData() as Card[];
  return (
    <>
      <Timer />
      <MemoryGame cards={cards} />
    </>
  );
}
