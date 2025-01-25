import { Request, Response } from "express";
import { handleException } from "../../utils";
import ControllerProduct from "../../controllers/products";

export async function getPlateOfRestaurant(_req: Request, _res: Response) {
  try {
    const idRestaurant = Number(_req.params.idRestaurant);
    const params = _req.query.search || "";
    const serviceProduct = new ControllerProduct();

    const products = await serviceProduct.listAllProducts(params, idRestaurant);
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

    const serviceProduct = new ControllerProduct();
    const products = await serviceProduct.saveProduct(newProduct);

    _res: Response.json(products);
  } catch (e) {
    handleException(_res, e);
  }
}

export async function remotePlate(_req: Request, _res: Response) {
  try {
    const id_product = _req.params.id;
    const id_restaurant = _req.params.idRestaurant;

    const serviceProduct = new ControllerProduct();
    const result = await serviceProduct.removeProduct(
      id_product,
      id_restaurant
    );

    _res.json(result);
  } catch (e) {
    handleException(_res, e);
  }
}
