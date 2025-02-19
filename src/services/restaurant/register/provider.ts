import RepositoryRestaurant from "@/infra/repository/restaurants";

export default class ProviderRegisterRestaurant {
  async register(restaurantData: RestaurantData) {
    const repositoryRestaurant = new RepositoryRestaurant();

    await repositoryRestaurant.registerNewRestaurant(restaurantData);
  }
}
