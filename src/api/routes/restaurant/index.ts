import { Router } from "express";
export const router = Router();

import {
  deleteRestaurant,
  getAllRestaurants,
  getRestaurantById,
  registerRestaurant,
  updateRegisterOfRestaurant,
} from "./restaurant";

router.get("/", getAllRestaurants);
router.get("/id/:id", getRestaurantById);
router.post("/", registerRestaurant);
router.put("/:id", updateRegisterOfRestaurant);
router.delete("/:id", deleteRestaurant);
