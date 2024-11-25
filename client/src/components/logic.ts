import type { Card } from "./Pages/Game-Page/Game";

// Seule la fonction getRandomCards est exportée, car elle est utilisée dans Game.tsx
// Les autres fonctions sont privées (pas exportées) car elles ne sont pas utilisées dans d'autres fichiers
// Elles ne servent qu'à créer la fonction getRandomCards
export function getRandomCards(array: Card[], totalCards: number): Card[] {
  const pairCount = totalCards / 2;
  const randomIndexes = getRandomIndex(array, pairCount);
  const randomItems = getRandomItems(array, randomIndexes);
  return shuffle(randomItems);
}

function getRandomCharacterIndex(array: Card[]): number {
  return Math.floor(Math.random() * array.length);
}

function getRandomIndex(array: Card[], pairCount: number): number[] {
  const indexes = new Set<number>();

  while (indexes.size < pairCount) {
    indexes.add(getRandomCharacterIndex(array));
  }

  return Array.from(indexes);
}

function getRandomItems(array: Card[], indexes: number[]): Card[] {
  const result = indexes.map((index) => array[index]);
  return [...result, ...result];
}

function shuffle(array: Card[]) {
  return array
    .map((item) => ({ index: Math.random(), value: item }))
    .sort((a, b) => a.index - b.index)
    .map((item) => item.value);
}
