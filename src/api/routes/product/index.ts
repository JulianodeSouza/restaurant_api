import { Router } from "express";
export const router = Router();

import { getPlateOfRestaurant, registerPlate, deletePlate } from "./plates";

router.get("/:idRestaurant", getPlateOfRestaurant);
router.post("/", registerPlate);
router.delete("/:id/restaurant/:idRestaurant", deletePlate);
