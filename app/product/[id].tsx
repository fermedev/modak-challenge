import AppErrorView from '@/common/components/app-error/app-error';
import { AppLayout } from '@/common/components/app-layout/app-layout';
import { AppLoadingView } from '@/common/components/app-loading/app-loading';
import { ProductDetail } from '@/features/products/components/product-detail/product-detail';
import { useFetchProductById } from '@/features/products/queries/useFetchProductById';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function ProductById() {
  const params = useLocalSearchParams<{ id: string }>();

  const {
    data: product,
    isPending,
    isError,
    error,
    refetch,
  } = useFetchProductById(Number(params.id));

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
    <AppLayout>
      <Stack.Screen options={{ title: product.title }} />
      <ProductDetail product={product} />
    </AppLayout>
  );
}
