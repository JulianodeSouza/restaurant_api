import { Router } from "express";
export const routes = Router();

import { router as productsRoutes } from "./product";
import { router as restaurantRoutes } from "./restaurant";

routes.use("/public/restaurant", restaurantRoutes);
routes.use("/public/product", productsRoutes);
