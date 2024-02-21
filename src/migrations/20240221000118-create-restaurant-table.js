"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("restaurants", {
      id_restaurant: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      url_image_restaurant: {
        type: Sequelize.STRING,
      },
      restaurant_name: {
        type: Sequelize.STRING,
        require: true,
      },
      street: {
        type: Sequelize.STRING,
        require: true,
      },
      neighborhood: {
        type: Sequelize.STRING,
        require: true,
      },
      number: {
        type: Sequelize.STRING,
        require: true,
      },
      zipcode: {
        type: Sequelize.STRING,
        require: true,
      },
      city: {
        type: Sequelize.STRING,
        require: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("restaurants");
  },
};
