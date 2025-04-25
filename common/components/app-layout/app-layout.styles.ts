import { colors } from '@/common/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 28,
    color: colors.text.primary,
  },
});
