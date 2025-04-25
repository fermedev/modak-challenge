import { useFetchProducts } from '@/modules/products/queries/useFetchProducts';
import { Product } from '@/modules/products/types/product';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export function useProducts() {
  const router = useRouter();
  const { data, ...rest } = useFetchProducts();
  const [sortOption, setSortOption] = useState<{
    field: 'price' | 'rating';
    order: 'asc' | 'desc';
  }>({
    field: 'price',
    order: 'asc',
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleProductPress(productId: number) {
    router.push(`/product/${productId}`);
  }

  function handleCategoryChange(category: string | null) {
    setSelectedCategory(category);
  }

  function handleSortChange(field: 'price' | 'rating', order: 'asc' | 'desc') {
    setSortOption({ field, order });
  }

  function sortProducts(products: Product[]) {
    if (!products) return [];

    return [...products].sort((a, b) => {
      if (sortOption.order === 'asc') {
        return a[sortOption.field] - b[sortOption.field];
      } else {
        return b[sortOption.field] - a[sortOption.field];
      }
    });
  }

  const sortedProducts = data ? sortProducts(data.products) : [];

  return {
    selectedCategory,
    handleProductPress,
    handleCategoryChange,
    handleSortChange,
    sortedProducts,
    ...rest,
  };
}
