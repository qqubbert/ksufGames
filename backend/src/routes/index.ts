import { type Application } from "express";
import gamesRouter from "./gamesRouter";

export const setupRoutes = (app: Application): void => {
  app.use("/games", gamesRouter);
}