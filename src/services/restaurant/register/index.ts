import RequestErrors from "@/api/middlewares/errors/Request";
import ProviderRegisterRestaurant from "./provider";

export default class ServiceRegisterRestaurant {
  private provider: ProviderRegisterRestaurant;

  constructor() {
    this.provider = new ProviderRegisterRestaurant();
  }

  async register(restaurant: RestaurantData) {
    await this.validateRegister(restaurant);
    await this.provider.register(restaurant);

    return { success: true };
  }

  private async validateRegister(data: RestaurantData) {
    let errors = [];

    if (!data.restaurantName) {
      errors.push({
        field: "restaurant_name",
        message: "O nome do restaurante é obrigatório",
      });
    }

    if (!data.street) {
      errors.push({
        field: "street",
        message: "O endereço do restaurante é obrigatório",
      });
    }

    if (!data.neighborhood) {
      errors.push({
        field: "neighborhood",
        message: "O bairro do restaurante é obrigatório",
      });
    }

    if (!data.city) {
      errors.push({
        field: "city",
        message: "A cidade do restaurante é obrigatória",
      });
    }

    if (!data.number) {
      errors.push({
        field: "number",
        message: "O numero do endereço é obrigatório",
      });
    }

    if (data.zipcode) {
      const zipCodeNumbersOnly = data.zipcode.replace(/\D/g, "");

      if (zipCodeNumbersOnly.length !== 8) {
        errors.push({
          field: "zipcode",
          message: "CEP inserido é inválido",
        });
      }
    }

    if (errors.length > 0) {
      throw new RequestErrors(
        "Não foi possível cadastrar o restaurante pois há erros no preenchimento dos campos",
        errors
      );
    }
  }
}
