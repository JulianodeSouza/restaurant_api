import { Router } from "express";
export const router = Router();

import { getPlateOfRestaurant } from "./product";

router.get("/:idRestaurant", getPlateOfRestaurant);
router.post("/");
router.delete("/:id/restaurant/:idRestaurant");
