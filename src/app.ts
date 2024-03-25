import express from "express";
import { MongooseClient } from "./database/mongoDB";
import cors, { CorsOptions } from "cors";
import { routes } from "./routes";
require("dotenv").config({
  path: process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.dev",
});

new MongooseClient().connect();

const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: "Authorization,Content-Type",
  maxAge: 3600, // Cache por 1 hora
};

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/v1", routes);

export { app };
