import { useFetchProducts } from '@/features/products/queries/useFetchProducts';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ProductsModel } from '../models/products';
import { useFetchProductByCategory } from '../queries/useFetchProductsByCategory';

export function useProducts() {
  const router = useRouter();
  const { data: allProducts, ...rest } = useFetchProducts();
  const [sortOption, setSortOption] = useState<{
    field: 'price' | 'rating';
    order: 'asc' | 'desc';
  }>({
    field: 'price',
    order: 'asc',
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data: categoryProducts } = useFetchProductByCategory(
    selectedCategory ?? '',
  );

  function handleProductPress(productId: number) {
    router.push(`/product/${productId}`);
  }

  function handleCategoryChange(category: string | null) {
    setSelectedCategory(category);
  }

  function handleSortChange(field: 'price' | 'rating', order: 'asc' | 'desc') {
    setSortOption({ field, order });
  }

  function sortProducts(products: ProductsModel[]) {
    if (!products) return [];

    return [...products].sort((a, b) => {
      if (sortOption.order === 'asc') {
        return a[sortOption.field] - b[sortOption.field];
      } else {
        return b[sortOption.field] - a[sortOption.field];
      }
    });
  }

  const all = allProducts ? sortProducts(allProducts) : [];
  const byCategory = categoryProducts ? sortProducts(categoryProducts) : [];

  const sortedProducts = selectedCategory ? byCategory : all;
  return {
    selectedCategory,
    handleProductPress,
    handleCategoryChange,
    handleSortChange,
    sortOption,
    sortedProducts,
    ...rest,
  };
}
