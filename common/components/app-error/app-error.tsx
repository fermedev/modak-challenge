import { colors } from '@/common/theme/colors';
import { TriangleAlert as AlertTriangle, RefreshCw } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './app-error.styles';

type AppErrorViewProps = {
  error: string;
  onRetry: () => void;
};

export default function AppErrorView({ error, onRetry }: AppErrorViewProps) {
  return (
    <View style={styles.container}>
      <AlertTriangle size={64} color={colors.error} />
      <Text style={styles.errorText}>Something went wrong</Text>
      <Text style={styles.errorMessage}>{error}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <RefreshCw size={16} color={colors.white} />
        <Text style={styles.retryButtonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}
