"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_restaurant: {
        type: Sequelize.INTEGER,
        require: true,
      },
      url_image_product: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      product_name: {
        type: Sequelize.STRING,
        require: true,
        defaultValue: null,
      },
      description: {
        type: Sequelize.STRING,
        require: true,
        defaultValue: null,
      },
      price: {
        type: Sequelize.FLOAT,
        require: true,
        defaultValue: null,
      },
      category: {
        type: Sequelize.STRING,
        require: true,
        defaultValue: null,
      },
      promotion: {
        require: true,
        type: Sequelize.BOOLEAN,
        defaultValue: null,
      },
      description_promotion: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      start_promotion: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      end_promotion: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      price_promotion: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
