import { Request, Response } from "express";
import { handleException } from "../../utils";
import ControllerRestaurant from "../../controllers/restaurant";

export async function getAllRestaurants(_req: Request, _res: Response) {
  try {
    const serviceRestaurant = new ControllerRestaurant();
    const restaurants = await serviceRestaurant.listAllRestaurants();

    _res.json(restaurants);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function getRestaurantById(_req: Request, _res: Response) {
  try {
    const idRestaurant = Number(_req.params.id);

    const serviceRestaurant = new ControllerRestaurant();
    const restaurant = await serviceRestaurant.listRestaurant(idRestaurant);

    _res.json(restaurant);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function registerRestaurant(_req: Request, _res: Response) {
  try {
    const serviceRestaurant = new ControllerRestaurant();
    const data = _req.body;

    if (Array.isArray(_req.files) && _req.files.length > 0) {
      data.url_image_restaurant = _req.files[0].filename;
    }

    const result = await serviceRestaurant.register(data);

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
    const serviceRestaurant = new ControllerRestaurant();
    const id_restaurant = Number(_req.params.id);
    const restaurant = _req.body;

    const result = await serviceRestaurant.update(id_restaurant, restaurant);
    _res.json(result);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function deleteRestaurant(_req: Request, _res: Response) {
  try {
    const idRestaurant = _req.params.id;
    const serviceRestaurant = new ControllerRestaurant();

    const result = await serviceRestaurant.remove(idRestaurant);

    _res.json(result);
  } catch (e) {
    handleException(_res, e);
  }
}
