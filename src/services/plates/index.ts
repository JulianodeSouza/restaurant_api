import RequestErrors from "@/api/middlewares/errors/Request";
import ProviderPlates from "./provider";
import RestaurantErrors from "@/api/middlewares/errors/RestaurantErrors";
import PlatesEntity from "@/infra/models/plates";

export default class ServicePlates {
  private provider: ProviderPlates;

  constructor() {
    this.provider = new ProviderPlates();
  }

  async listAllPlates(
    params: any,
    idRestaurant: number
  ): Promise<PlatesEntity[]> {
    const plates = await this.provider.getAllPlates(idRestaurant, params);
    return plates;
  }

  async registerPlate(plate: Plate) {
    await this.validateRegister(plate);
    await this.provider.registerPlate(plate);

    return { success: true };
  }

  async removePlate(idPlate: number) {
    const plate = await this.provider.getPlateOfRestaurant(idPlate);

    if (!plate) {
      throw new RestaurantErrors("Produto não encontrado");
    }

    await this.provider.removePlate(idPlate);

    return { success: true };
  }

  private async validateRegister(data: Plate) {
    let errors = [];

    if (!data.productName) {
      errors.push({
        field: "product_name",
        message: "O nome do prato é obrigatório",
      });
    }

    if (!data.description) {
      errors.push({
        field: "description",
        message: "A descrição do prato é obrigatória",
      });
    }

    if (!data.price) {
      errors.push({
        field: "price",
        message: "Valor do prato é obrigatório",
      });
    }

    if (!data.category) {
      errors.push({
        field: "category",
        message: "Categoria é obrigatória",
      });
    }

    if (data.promotion) {
      if (!data.startPromotion) {
        errors.push({
          field: "start_promotion",
          message: "Informe a data de inicio da promoção",
        });
      }

      if (!data.endPromotion) {
        errors.push({
          field: "start_promotion",
          message: "Informe a data final da promoção",
        });
      }

      if (!data.descriptionPromotion) {
        errors.push({
          field: "description_promotion",
          message: "Descricão da promoção é obrigatória",
        });
      }

      if (!data.pricePromotion) {
        errors.push({
          field: "price_promotion",
          message: "Valor da promoção é obrigatório",
        });
      }
    }

    if (errors.length > 0) {
      throw new RequestErrors(
        "Não foi possível cadastrar o prato pois há erros no preenchimento dos campos",
        errors
      );
    }
  }
}
