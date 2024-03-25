import { app } from "../app";
import request from "supertest";
import mongoose, { ConnectOptions } from "mongoose";
require("dotenv").config({
  path: process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.dev",
});

describe("Create Article Controller", () => {
  beforeAll(async () => {
    await mongoose.connect(
      process.env.MONGODB_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("Should be able create a new article", async () => {
    const response = await request(app)
      .post("/v1/article")
      .send({
        title: "Título do Artigo",
        content: "Conteúdo do Artigo...",
        tags: ["tag1"],
      });

    expect(response.status).toBe(201);
  });

  it("Should be able to search all articles", async () => {
    const response = await request(app).get("/v1/article");

    expect(response.status).toBe(200);
  });
});
