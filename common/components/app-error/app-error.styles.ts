import { colors } from '@/common/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  errorText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 16,
  },
  errorMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  retryButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    gap: 8,
  },
  retryButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: colors.white,
  },
});
