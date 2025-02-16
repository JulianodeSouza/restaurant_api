type Plate = {
  idRestaurant: number;
  urlImageProduct?: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  promotion: boolean;
  descriptionPromotion?: string;
  startPromotion?: Date;
  endPromotion?: Date;
  pricePromotion?: number;
};
