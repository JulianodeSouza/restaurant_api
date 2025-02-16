import PlatesEntity from "../models/plates";

type ParamsPlates = {
  [key in keyof PlatesEntity]?: any;
};

export default class RepositoryPlates {
  async getAllWithParams(params?: ParamsPlates): Promise<PlatesEntity[]> {
    const plates = await PlatesEntity.findAll({
      where: params,
    });

    return plates;
  }

  async getOneWithParams(params?: ParamsPlates): Promise<PlatesEntity | null> {
    const plate = await PlatesEntity.findOne({
      where: params,
    });

    return plate;
  }

  async registerNewPlate(plateData: Plate): Promise<void> {
    await PlatesEntity.create(plateData);
  }

  async removePlate(idPlate: number): Promise<void> {
    await PlatesEntity.update({ active: 0 }, { where: { id: idPlate } });
  }
}
