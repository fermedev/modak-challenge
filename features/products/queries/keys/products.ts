import { Category } from '@/features/products/types/product';

export const PRODUCT_KEYS = {
  all: ['products'],
  productsByCategory: (cat: Category['slug']) => ['products', cat],
  productById: (id: number) => ['product', id],
  allCategories: ['categories'],
};
