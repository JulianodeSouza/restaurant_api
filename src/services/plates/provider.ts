import PlatesEntity from "@/infra/models/plates";
import RepositoryPlates from "@/infra/repository/plates";
import { Op } from "sequelize";

export default class ProviderPlates {
  async getAllPlates(
    idRestaurant: number,
    search: any
  ): Promise<PlatesEntity[]> {
    const repositoryPlates = new RepositoryPlates();
    const products = await repositoryPlates.getAllWithParams({
      idRestaurant: idRestaurant,
      productName: { [Op.like]: "%" + search + "%" },
      category: { [Op.like]: "%" + search + "%" },
    });

    return products;
  }

  async getPlateOfRestaurant(idProduct: number): Promise<PlatesEntity | null> {
    const repositoryPlates = new RepositoryPlates();
    const product = await repositoryPlates.getOneWithParams({
      idProduct: idProduct,
    });

    return product;
  }

  async registerPlate(plate: Plate) {
    const repositoryPlates = new RepositoryPlates();
    await repositoryPlates.registerNewPlate(plate);
  }

  async removePlate(idPlate: number): Promise<void> {
    const repositoryPlates = new RepositoryPlates();
    await repositoryPlates.removePlate(idPlate);
  }
}
