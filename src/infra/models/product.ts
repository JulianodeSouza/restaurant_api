import { DataTypes, Model, Sequelize } from "sequelize";
import RestaurantEntity from "./restaurant";
const sequelize = new Sequelize();

export default class ProductsEntity extends Model {
  declare idProduct: number;
  declare idRestaurant: number;
  declare urlImageProduct: string;
  declare productName: string;
  declare description: string;
  declare price: number;
  declare category: string;
  declare promotion: boolean;
  declare descriptionPromotion: string;
  declare startPromotion: Date;
  declare endPromotion: Date;
  declare pricePromotion: number;
}

ProductsEntity.init(
  {
    idProduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_product",
    },
    idRestaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_restaurant",
    },
    urlImageProduct: {
      type: DataTypes.STRING,
      defaultValue: null,
      field: "url_image_product",
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
      field: "product_name",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    promotion: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: null,
    },
    descriptionPromotion: {
      type: DataTypes.STRING,
      defaultValue: null,
      field: "description_promotion",
    },
    startPromotion: {
      type: DataTypes.DATE,
      defaultValue: null,
      field: "start_promotion",
    },
    endPromotion: {
      type: DataTypes.DATE,
      defaultValue: null,
      field: "end_promotion",
    },
    pricePromotion: {
      type: DataTypes.FLOAT,
      defaultValue: null,
      field: "price_promotion",
    },
  },
  {
    sequelize,
    tableName: "product",
  }
);

ProductsEntity.belongsTo(RestaurantEntity, {
  foreignKey: "id_restaurant",
  as: "restaurant",
});
