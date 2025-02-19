import RestaurantEntity from "../models/restaurant";

type ParamsRestaurant = {
  [key in keyof RestaurantEntity]?: any;
};

export default class RepositoryRestaurant {
  async getAllWithParams(
    params?: ParamsRestaurant
  ): Promise<RestaurantEntity[]> {
    const restaurant = await RestaurantEntity.findAll({
      where: params,
    });

    return restaurant;
  }

  async getOneWithParams(
    params?: ParamsRestaurant
  ): Promise<RestaurantEntity | null> {
    const restaurant = await RestaurantEntity.findOne({
      where: params,
    });

    return restaurant;
  }

  async registerNewRestaurant(data: RestaurantData): Promise<void> {
    await RestaurantEntity.create(data);
  }

  async updateRestaurant(
    idRestaurant: number,
    data: Partial<RestaurantData>
  ): Promise<void> {
    await RestaurantEntity.update(data, {
      where: {
        id_restaurant: idRestaurant,
      },
    });
  }

  async removeRestaurant(idRestaurant: number): Promise<void> {
    await RestaurantEntity.update(
      {
        active: false,
      },
      {
        where: {
          id_restaurant: idRestaurant,
        },
      }
    );
  }
}
