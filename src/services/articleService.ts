import { IArticle } from "../models/article";
import { ArticleDTO, CreateArticleDTO } from "../@types/articleDTOs";
import { ArticleRepository } from "../repositories/articleRepository";
import { BadRequest } from "../responseHandlers";

export class ArticleService {
  private articleRepository: ArticleRepository;

  constructor() {
    this.articleRepository = new ArticleRepository();
  }

  private articleToDTO(article: IArticle): ArticleDTO {
    return {
      _id: article._id.toString(),
      title: article.title,
      content: article.content,
      created_at: article.created_at,
      tags: article.tags,
    };
  }

  async create(articleData: CreateArticleDTO): Promise<ArticleDTO> {
    try {
      const article = await this.articleRepository.create(articleData);

      return this.articleToDTO(article);
    } catch (error) {
      throw new BadRequest("Error while creating article");
    }
  }

  async getAll(): Promise<ArticleDTO[]> {
    try {
      const articles = await this.articleRepository.getAll();

      return articles.map((article: IArticle) => this.articleToDTO(article));
    } catch (error) {
      throw new BadRequest("Error while fetching articles");
    }
  }
}
