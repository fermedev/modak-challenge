import { QueryProvider } from '@/api/config/react-query';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='product/[id]' options={{ presentation: 'modal' }} />
      </Stack>
    </QueryProvider>
  );
}
