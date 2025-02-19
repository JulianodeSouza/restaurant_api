import { Request, Response } from "express";
import { handleException } from "@/utils";
import ServiceRestaurant from "@/services/restaurant";
import ServiceRegisterRestaurant from "@/services/restaurant/register";
import ServiceUpdateRestaurant from "@/services/restaurant/update";
import ServiceRemoveRestaurant from "@/services/restaurant/remove";

export async function getAllRestaurants(_req: Request, _res: Response) {
  try {
    const serviceRestaurant = new ServiceRestaurant();
    const restaurants = await serviceRestaurant.listAllRestaurants();

    _res.json(restaurants);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function getRestaurantById(_req: Request, _res: Response) {
  try {
    const idRestaurant = Number(_req.params.id);

    const serviceRestaurant = new ServiceRestaurant();
    const restaurant = await serviceRestaurant.listRestaurant(idRestaurant);

    _res.json(restaurant);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function registerRestaurant(_req: Request, _res: Response) {
  try {
    const data = _req.body;

    if (Array.isArray(_req.files) && _req.files.length > 0) {
      data.urlImageRestaurant = _req.files[0].filename;
    }
    const serviceRegisterRestaurant = new ServiceRegisterRestaurant();
    const result = await serviceRegisterRestaurant.register(data);

    _res.json(result);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function updateRegisterOfRestaurant(
  _req: Request,
  _res: Response
) {
  try {
    const idRestaurant = Number(_req.params.id);
    const restaurant = _req.body;

    const serviceUpdateRestaurant = new ServiceUpdateRestaurant();
    const result = await serviceUpdateRestaurant.update(
      idRestaurant,
      restaurant
    );

    _res.json(result);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function deleteRestaurant(_req: Request, _res: Response) {
  try {
    const idRestaurant = Number(_req.params.id);

    const serviceRemoveRestaurant = new ServiceRemoveRestaurant();
    const result = await serviceRemoveRestaurant.remove(idRestaurant);

    _res.json(result);
  } catch (e) {
    handleException(_res, e);
  }
}
