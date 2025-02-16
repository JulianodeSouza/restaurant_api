import { Request, Response } from "express";
import { handleException } from "@/utils";
import ServicePlates from "@/services/plates";

export async function getPlateOfRestaurant(_req: Request, _res: Response) {
  try {
    const idRestaurant = Number(_req.params.idRestaurant);
    const params = _req.query.search || "";
    const serviceProduct = new ServicePlates();

    const products = await serviceProduct.listAllPlates(params, idRestaurant);
    _res.json(products);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function registerPlate(_req: Request, _res: Response) {
  try {
    const newProduct = _req.body;

    if (Array.isArray(_req.files) && _req.files.length > 0) {
      newProduct.url_image_product = _req.files[0].filename;
    }

    const serviceProduct = new ServicePlates();
    const products = await serviceProduct.registerPlate(newProduct);

    _res: Response.json(products);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function deletePlate(_req: Request, _res: Response) {
  try {
    const idProduct = Number(_req.params.id);

    const serviceProduct = new ServicePlates();
    const result = await serviceProduct.removePlate(idProduct);

    _res.json(result);
  } catch (e) {
    handleException(_res, e);
  }
}
