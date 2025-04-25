import { colors } from '@/common/theme/colors';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './app-loading.styles';

export function AppLoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}
