import { useFetchProducts } from '@/modules/products/queries/useFetchProducts';
import { Product } from '@/modules/products/types/product';
import { useRouter } from 'expo-router';
import { useState } from 'react';
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

  const products = allProducts ? sortProducts(allProducts.products) : [];
  const categories = categoryProducts
    ? sortProducts(categoryProducts.products)
    : [];

  const sortedProducts = selectedCategory ? categories : products;
  return {
    selectedCategory,
    handleProductPress,
    handleCategoryChange,
    handleSortChange,
    sortedProducts,
    ...rest,
  };
}
