import { Router } from "express";

import { articleRoute } from "./articleRoute";

export const routes = Router();

routes.use("/article", articleRoute);
