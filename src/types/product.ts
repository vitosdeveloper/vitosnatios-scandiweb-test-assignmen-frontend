export interface IProduct {
  id: number;
  sku: string;
  name: string;
  price: number;
  productType: string;
  attribute: string;
}

export type NewProduct = Omit<IProduct, 'id'>;
