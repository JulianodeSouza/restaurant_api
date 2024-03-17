const { faker } = require("@faker-js/faker");
const Product = require("../controllers/products/index");
const db = require("../db/conn");

jest.mock("../db/conn", () => ({
  query: jest.fn(),
}));

const createInstance = () => {
  const sut = new Product();

  return { sut };
};

describe("Product class", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return an array of converted products", async () => {
    const { sut } = createInstance();

    // Mock the necessary dependencies and setup the test data
    const params = "";
    const idRestaurant = 1;
    const productMock = [
      {
        id_product: faker.number.int(),
        id_restaurant: faker.number.int(),
        url_image_product: faker.image.url(),
        product_name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        promotion: true,
        description_promotion: "Promotion 1",
        price_promotion: 9.99,
        start_promotion: "2022-01-01",
        end_promotion: "2022-01-31",
      },
      {
        id_product: faker.number.int(),
        id_restaurant: faker.number.int(),
        url_image_product: faker.image.url(),
        product_name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        promotion: false,
      },
    ];

    db.query.mockResolvedValue(productMock);

    const result = await sut.listAllProducts(params, idRestaurant);

    expect(result[0].start_promotion).toBe("01/01/2022");
    expect(result[0].end_promotion).toBe("31/01/2022");
  });

  it("should save a new product", async () => {
    const { sut } = createInstance();

    const productData = {
      url_image_product: "image.jpg",
      id_restaurant: 1,
      product_name: "Product 1",
      description: "Description 1",
      category: "Category 1",
      price: 10.99,
      promotion: true,
      start_promotion: "2022-01-01",
      end_promotion: "2022-01-31",
      price_promotion: 9.99,
      description_promotion: "Promotion 1",
    };

    const result = await sut.saveProduct(productData);

    expect(result).toEqual({ success: true });

    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining("insert into products"),
      expect.objectContaining({
        replacements: expect.objectContaining(productData),
        type: expect.anything(),
      })
    );
  });

  it("should remove an existing product", async () => {
    const { sut } = createInstance();

    const idProduct = 1;
    const idRestaurant = 1;
    db.query.mockResolvedValue({});

    const result = await sut.removeProduct(idProduct, idRestaurant);

    expect(result).toEqual({ success: true });

    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining("delete from products"),
      expect.objectContaining({
        replacements: {
          id_restaurant: idRestaurant,
          id_product: idProduct,
        },
        type: expect.anything(),
      })
    );
  });

  it("should throw an error if the product does not exist", async () => {
    const { sut } = createInstance();
    const idProduct = 1;
    const idRestaurant = 1;
    db.query.mockResolvedValue([]);

    await expect(sut.removeProduct(idProduct, idRestaurant)).rejects.toThrow(
      "Produto não encontrado"
    );
  });

  it("should convert a product object", () => {
    const { sut } = createInstance();

    const productData = {
      id_product: 1,
      id_restaurant: 1,
      url_image_product: "image.jpg",
      product_name: "Product 1",
      description: "Description 1",
      price: 10.99,
      category: "Category 1",
      promotion: true,
      description_promotion: "Promotion 1",
      price_promotion: 9.99,
      start_promotion: "2022-01-01",
      end_promotion: "2022-01-31",
    };

    const result = sut.convertProduct(productData);

    expect(result).toEqual({
      id_product: 1,
      id_restaurant: 1,
      url_image_product: "image.jpg",
      product_name: "Product 1",
      description: "Description 1",
      price: 10.99,
      category: "Category 1",
      promotion: true,
      description_promotion: "Promotion 1",
      price_promotion: 9.99,
      start_promotion: "01/01/2022",
      end_promotion: "31/01/2022",
    });
  });
});
