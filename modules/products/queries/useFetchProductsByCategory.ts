import type { Category } from '@/modules/products/types/product';
import { useQuery } from '@tanstack/react-query';
import { ProductsService } from '../services/products';
import { PRODUCT_KEYS } from './keys/products';

export function useFetchProductByCategory(cat: Category['slug']) {
  return useQuery({
    queryKey: PRODUCT_KEYS.productsByCategory(cat),
    queryFn: () => ProductsService.fetchProductsByCategories(cat),
  });
}
