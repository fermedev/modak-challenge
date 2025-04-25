import { useQuery } from '@tanstack/react-query';
import { ProductsService } from '../services/products';
import { PRODUCT_KEYS } from './keys/products';

export function useFetchCategories() {
  return useQuery({
    queryKey: PRODUCT_KEYS.allCategories,
    queryFn: ProductsService.fetchCategories,
  });
}
