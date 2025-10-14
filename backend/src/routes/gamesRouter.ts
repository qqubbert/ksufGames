import { Router } from "express";
import * as gamesController from "controllers/gamesController";

const gamesRouter = Router();

gamesRouter.get("/", gamesController.getGames);
gamesRouter.get("/:id", gamesController.getGame);
gamesRouter.post("/", gamesController.addGame);
gamesRouter.delete("/:id", gamesController.delGame);
gamesRouter.put("/:id", gamesController.editGame);

export default gamesRouter;