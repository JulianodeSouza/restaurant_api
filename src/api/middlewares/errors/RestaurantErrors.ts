export default class RestaurantErrors extends Error {
  restaurantErrors: any[] = [];

  constructor(message: string) {
    super(message);
  }
}
