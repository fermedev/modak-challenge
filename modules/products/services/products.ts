import { API } from '@/api/config/axios';

import { ProductsMapper } from '@/modules/products/models/mapper';
import type {
  Category,
  ProductsResponse,
  SingleProductReponse,
} from '@/modules/products/types/product';

export class ProductsService {
  static async fetchProducts() {
    const response = await API.get<ProductsResponse>('/products');
    return ProductsMapper.mapProductsToModel(response.data.products);
  }

  static async fetchProductsById(id: number) {
    const response = await API.get<SingleProductReponse>(`/products/${id}`);
    return ProductsMapper.mapProductToModel(response.data);
  }
  static async fetchCategories() {
    const response = await API.get<Category[]>('/products/categories');
    return ProductsMapper.mapCategoryToModel(response.data);
  }

  static async fetchProductsByCategories(cat: Category['slug']) {
    const response = await API.get<ProductsResponse>(
      `/products/category/${cat}`,
    );
    return ProductsMapper.mapProductsToModel(response.data.products);
  }
}
