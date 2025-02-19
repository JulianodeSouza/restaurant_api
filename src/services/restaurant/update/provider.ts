import RestaurantEntity from "@/infra/models/restaurant";
import RepositoryRestaurant from "@/infra/repository/restaurants";

export default class ProviderUpdateRestaurant {
  async getRestaurant(idRestaurant: number): Promise<RestaurantEntity | null> {
    const repositoryRestaurant = new RepositoryRestaurant();

    const restaurant = await repositoryRestaurant.getOneWithParams({
      idRestaurant,
    });

    return restaurant;
  }

  async updateRestaurant(
    idRestaurant: number,
    data: Partial<RestaurantData>
  ): Promise<void> {
    const repositoryRestaurant = new RepositoryRestaurant();
    await repositoryRestaurant.updateRestaurant(idRestaurant, data);
  }
}
