import type { Request, Response } from "express";

import * as gamesService from "services/gamesService" 

export const addGame = async (req: Request, res: Response): Promise<void> => {
  const newGame = req.body;
  const updatedGames = gamesService.addGame(newGame);
  res.status(201).json(updatedGames);
}

export const delGame = async (req: Request, res: Response): Promise<void> => {
  const gameId = Number(req.params.id);
  const updatedGames = gamesService.delGame(gameId);
  res.status(201).json(updatedGames);
}

export const editGame = async (req: Request, res: Response): Promise<void> => {
  const gameId = Number(req.params.id);
  const newGame = req.body;
  const updatedGames = gamesService.editGame(gameId, newGame);
  res.status(201).json(updatedGames);
}

export const getGames = async (req: Request, res: Response): Promise<void> => {
  const games = gamesService.getGames();
  res.status(200).json(games);
}

export const getGame = async (req: Request, res: Response): Promise<void> => {
  const gameId = Number(req.params.id);
  const games = gamesService.getGame(gameId);
  res.status(200).json(games);
}