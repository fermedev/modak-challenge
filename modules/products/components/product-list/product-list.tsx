import AppErrorView from '@/common/components/app-error/app-error';
import { AppLoadingView } from '@/common/components/app-loading/app-loading';
import { colors } from '@/common/theme/colors';
import { ProductCard } from '@/modules/products/components/product-card/product-card';
import { useProducts } from '@/modules/products/hooks/useProducts';
import { FlatList, RefreshControl, Text } from 'react-native';
import { styles } from './product-list.styles';

export function ProductList() {
  const {
    isPending,
    isError,
    error,
    refetch,
    sortedProducts,
    handleProductPress,
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
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No products found</Text>
        )}
      />
    </>
  );
}
