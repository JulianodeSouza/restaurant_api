import RestaurantErrors from "@/api/middlewares/errors/RestaurantErrors";
import ProviderUpdateRestaurant from "./provider";

export default class ServiceUpdateRestaurant {
  private provider: ProviderUpdateRestaurant;

  constructor() {
    this.provider = new ProviderUpdateRestaurant();
  }

  async update(idRestaurant: number, data: Partial<RestaurantData>) {
    const restaurant = await this.provider.getRestaurant(idRestaurant);

    if (!restaurant) {
      throw new RestaurantErrors("Estabelecimento não encontrado.");
    }

    await this.provider.updateRestaurant(idRestaurant, data);

    return { success: true };
  }
}
