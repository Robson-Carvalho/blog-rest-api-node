import { ArticleModel, IArticle } from "../models/article";
import { CreateArticleDTO } from "../@types/articleDTOs";

export class ArticleRepository {
  async create(articleData: CreateArticleDTO): Promise<IArticle> {
    return await ArticleModel.create(articleData);
  }

  async getAll(): Promise<IArticle[]> {
    return await ArticleModel.find();
  }
}
