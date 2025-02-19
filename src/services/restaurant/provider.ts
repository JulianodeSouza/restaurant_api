import RestaurantEntity from "@/infra/models/restaurant";
import RepositoryRestaurant from "@/infra/repository/restaurants";

export default class ProviderRestaurant {
  async getAllRestaurants(): Promise<RestaurantEntity[]> {
    const repositoryRestaurant = new RepositoryRestaurant();
    const restaurants = await repositoryRestaurant.getAllWithParams();

    return restaurants;
  }

  async getRestaurant(idRestaurant: number) {
    const repositoryRestaurant = new RepositoryRestaurant();
    const restaurant = await repositoryRestaurant.getOneWithParams({
      idRestaurant: idRestaurant,
    });

    return restaurant;
  }
}
