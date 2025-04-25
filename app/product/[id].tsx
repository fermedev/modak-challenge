import AppErrorView from '@/common/components/app-error/app-error';
import { AppLayout } from '@/common/components/app-layout/app-layout';
import { AppLoadingView } from '@/common/components/app-loading/app-loading';
import { useFetchProductById } from '@/modules/products/queries/useFetchProductById';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function ProductDetail() {
  const params = useLocalSearchParams<{ id: string }>();

  const { data, isPending, isError, error, refetch } = useFetchProductById(
    Number(params.id),
  );

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
      <Stack.Screen options={{ title: data.title }} />
    </AppLayout>
  );
}
