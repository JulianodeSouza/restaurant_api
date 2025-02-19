import ProviderRestaurant from "./provider";
import RestaurantErrors from "@/api/middlewares/errors/RestaurantErrors";

export default class ServiceRestaurant {
  private provider: ProviderRestaurant;

  constructor() {
    this.provider = new ProviderRestaurant();
  }

  async listAllRestaurants() {
    const restaurants = await this.provider.getAllRestaurants();

    if (restaurants.length === 0) {
      throw new RestaurantErrors("Nenhum restaurante cadastrado");
    }

    return restaurants;
  }

  async listRestaurant(idRestaurant: number) {
    const restaurant = await this.provider.getRestaurant(idRestaurant);

    if (!restaurant) {
      throw new RestaurantErrors("Estabelecimento não encontrado.");
    }

    return restaurant;
  }
}
