import { QueryProvider } from '@/api/config/react-query';
import { useRegisterPushNotification } from '@/common/hooks/useRegisterPushNotifications';
import { PushNotificationService } from '@/common/services/push-notification-service';
import { Stack } from 'expo-router';

PushNotificationService.notificationHandler();

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  useRegisterPushNotification();
  return (
    <QueryProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='product/[id]' options={{ presentation: 'modal' }} />
      </Stack>
    </QueryProvider>
  );
}
