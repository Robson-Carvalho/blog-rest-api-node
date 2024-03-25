interface CreateArticleDTO {
  title: string;
  content: string;
  tags: string[];
}

interface UpdateArticleDTO {
  title?: string;
  content?: string;
  tags?: string[];
}

interface ArticleDTO {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  tags: string[];
}

export { CreateArticleDTO, UpdateArticleDTO, ArticleDTO };
