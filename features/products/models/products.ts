import {
  Category,
  ProductsResponse,
  SingleProductReponse,
} from '../types/product';

export type ProductsModel = Pick<
  ProductsResponse['products'][number],
  'id' | 'title' | 'price' | 'thumbnail' | 'rating' | 'discountPercentage'
>;

export type ProductModel = Pick<
  SingleProductReponse,
  | 'id'
  | 'thumbnail'
  | 'brand'
  | 'title'
  | 'rating'
  | 'price'
  | 'discountPercentage'
  | 'description'
  | 'category'
  | 'stock'
>;

export type CategoryModel = Omit<Category, 'url'>;
