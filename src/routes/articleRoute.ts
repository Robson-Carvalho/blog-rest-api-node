import { Router } from "express";
import { ArticleController } from "../controllers/articleController";

export const articleRoute = Router();

const controller = new ArticleController();

articleRoute.get("/", controller.getAll);
articleRoute.post("/", controller.create);
