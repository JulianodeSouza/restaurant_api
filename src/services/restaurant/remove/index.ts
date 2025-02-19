import ProviderRemoveRestaurant from "./provider";

export default class ServiceRemoveRestaurant {
  private provider: ProviderRemoveRestaurant;

  constructor() {
    this.provider = new ProviderRemoveRestaurant();
  }

  async remove(idRestaurant: number) {
    await this.provider.remove(idRestaurant);

    return { success: true };
  }
}
