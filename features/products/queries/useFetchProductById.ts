import { ProductsService } from '@/features/products/services/products';
import { useQuery } from '@tanstack/react-query';
import { PRODUCT_KEYS } from './keys/products';

export function useFetchProductById(id: number) {
  return useQuery({
    queryKey: PRODUCT_KEYS.productById(id),
    queryFn: () => ProductsService.fetchProductsById(id),
  });
}
