import { Schema, model, Document } from "mongoose";
import { formatDateTime } from "../utils/formatDateTime";

interface IArticle extends Document {
  title: string;
  content: string;
  created_at: string;
  tags: string[];
}

const articleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: String, default: formatDateTime(new Date()) },
  tags: [{ type: String }],
});

const ArticleModel = model<IArticle>("Article", articleSchema);

export { IArticle, ArticleModel };
