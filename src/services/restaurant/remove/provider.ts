import RepositoryRestaurant from "@/infra/repository/restaurants";
export default class ProviderRemoveRestaurant {
  async remove(idRestaurant: number): Promise<void> {
    const repositoryRestaurant = new RepositoryRestaurant();
    await repositoryRestaurant.removeRestaurant(idRestaurant);
  }
}
