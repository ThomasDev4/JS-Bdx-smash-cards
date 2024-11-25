import { useLoaderData } from "react-router-dom";
import MemoryGame, { type Card } from "./Game";

export default function GamePage() {
  const cards: Card[] = useLoaderData() as Card[];
  return <MemoryGame cards={cards} />;
}
