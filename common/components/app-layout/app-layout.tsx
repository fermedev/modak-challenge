import { PropsWithChildren } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './app-layout.styles';

type AppLayoutProps = {
  title?: string;
};

export function AppLayout({
  title,
  children,
}: PropsWithChildren<AppLayoutProps>) {
  return (
    <SafeAreaView style={styles.container}>
      {!!title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {children}
    </SafeAreaView>
  );
}
