import { ProductsService } from '@/modules/products/services/products';
import { useQuery } from '@tanstack/react-query';
import { PRODUCT_KEYS } from './keys/products';

export function useFetchProducts() {
  return useQuery({
    queryKey: PRODUCT_KEYS.all,
    queryFn: ProductsService.fetchProducts,
  });
}
