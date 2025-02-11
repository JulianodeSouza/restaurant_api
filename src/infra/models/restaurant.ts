import { Model, Sequelize } from "sequelize";
import ProductsEntity from "./product";
const { DataTypes } = require("sequelize");
const sequelize = new Sequelize();

export default class RestaurantEntity extends Model {
  declare idRestaurant: number;
  declare urlImageRestaurant: string;
  declare restaurantName: string;
  declare street: string;
  declare neighborhood: string;
  declare number: string;
  declare zipcode: string;
  declare city: string;
}

RestaurantEntity.init(
  {
    idRestaurant: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_restaurant",
    },
    urlImageRestaurant: {
      type: DataTypes.STRING,
      field: "url_image_restaurant",
    },
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "restaurant_name",
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "restaurant",
  }
);

RestaurantEntity.hasMany(ProductsEntity);
