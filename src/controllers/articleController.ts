import { Request, Response } from "express";
import { ArticleService } from "../services/articleService";
import { ArticleDTO, CreateArticleDTO } from "../@types/articleDTOs";
import { BadRequest, Conflict } from "../responseHandlers";

const articleService = new ArticleService();

export class ArticleController {
  async create(req: Request, res: Response): Promise<Response | void> {
    try {
      const data: CreateArticleDTO = req.body;

      const response = await articleService.create(data);

      return res.status(201).json(response);
    } catch (error) {
      if (error instanceof BadRequest || error instanceof Conflict) {
        return res.status(error.status).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const article: ArticleDTO[] = await articleService.getAll();

      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
