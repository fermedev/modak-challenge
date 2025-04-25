import type {
  Category,
  ProductsResponse,
  SingleProductReponse,
} from '../types/product';
import type { CategoryModel, ProductModel, ProductsModel } from './products';

export class ProductsMapper {
  static mapProductsToModel(
    products: ProductsResponse['products'],
  ): ProductsModel[] {
    return products.map((i) => ({
      id: i.id,
      title: i.title,
      price: i.price,
      rating: i.rating,
      discountPercentage: i.discountPercentage,
      thumbnail: i.thumbnail,
    }));
  }

  static mapProductToModel(product: SingleProductReponse): ProductModel {
    return {
      id: product.id,
      brand: product.brand,
      category: product.category,
      description: product.description,
      discountPercentage: product.discountPercentage,
      price: product.price,
      rating: product.rating,
      stock: product.stock,
      thumbnail: product.thumbnail,
      title: product.title,
    };
  }

  static mapCategoryToModel(categories: Category[]): CategoryModel[] {
    return categories.map((c) => ({
      name: c.name,
      slug: c.slug,
    }));
  }
}
