import AppErrorView from '@/common/components/app-error/app-error';
import { AppLoadingView } from '@/common/components/app-loading/app-loading';
import { colors } from '@/common/theme/colors';
import { ProductCard } from '@/features/products/components/product-card/product-card';
import { ProductFilter } from '@/features/products/components/product-filter/product-filter';
import { useProducts } from '@/features/products/hooks/useProducts';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { ProductSort } from '../product-sort/product-sort';
import { styles } from './product-list.styles';

export function ProductList() {
  const {
    isPending,
    isError,
    error,
    refetch,
    sortedProducts,
    handleProductPress,
    handleCategoryChange,
    selectedCategory,
    handleSortChange,
    sortOption,
  } = useProducts();

  if (isPending) {
    return <AppLoadingView />;
  }

  if (isError) {
    return (
      <AppErrorView
        error={error instanceof Error ? error.message : 'An error occurred'}
        onRetry={refetch}
      />
    );
  }

  return (
    <>
      <ProductFilter
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <ProductSort sortOption={sortOption} onSortChange={handleSortChange} />
      <FlatList
        data={sortedProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item.id)}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        columnWrapperStyle={styles.productsRow}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isPending}
            onRefresh={refetch}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
        ListEmptyComponent={() => <ActivityIndicator />}
      />
    </>
  );
}
