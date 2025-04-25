import { AppLayout } from '@/common/components/app-layout/app-layout';
import { ProductList } from '@/features/products/components/product-list/product-list';

export default function Home() {
  return (
    <AppLayout title='Products'>
      <ProductList />
    </AppLayout>
  );
}
