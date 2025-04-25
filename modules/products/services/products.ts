import { API } from '@/api/config/axios';

import type {
  Category,
  Product,
  ProductsResponse,
} from '@/modules/products/types/product';

export class ProductsService {
  static async fetchProducts() {
    const response = await API.get<ProductsResponse>('/products');
    return response.data;
  }

  static async fetchProductsById(id: number) {
    const response = await API.get<Product>(`/products/${id}`);
    return response.data;
  }
  static async fetchCategories() {
    const response = await API.get<Category[]>('/products/categories');
    return response.data;
  }

  static async fetchProductsByCategories(cat: Category['slug']) {
    const response = await API.get<ProductsResponse>(
      `/products/category/${cat}`,
    );
    return response.data;
  }
}
