import { type game, type rawGame } from "models/game"

import { gameList } from "storage/db"

export const getGames = (): game[] => {
  return gameList;
}

export const getGame = (id: number): game => {
  return gameList.find(game => game.id === id) as game;
}

export const addGame = (newGame: rawGame): game[] => {
  gameList.push({ id: gameList.length++, title: newGame.title, icon: newGame.icon, name: newGame.name });
  return gameList;
}

export const delGame = (id: number): game[] => {
  const gameIndex = gameList.findIndex(game => game.id === id);
  if (gameIndex !== -1) {
    gameList.splice(gameIndex, 1);
  }
  return gameList;
}

export const editGame = (id: number, newGame: rawGame): game[] => {
  const gameIndex = gameList.findIndex(game => game.id === id);
  if (gameIndex !== -1) {
    gameList[gameIndex] = { id, title: newGame.title, icon: newGame.icon, name: newGame.name };
  }
  return gameList;
}