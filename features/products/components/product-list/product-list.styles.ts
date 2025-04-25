import { colors } from '@/common/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productsList: {
    padding: 8,
    paddingBottom: 20,
  },
  productsRow: {
    justifyContent: 'space-between',
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 40,
  },
});
