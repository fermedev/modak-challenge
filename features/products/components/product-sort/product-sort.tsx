import { ArrowDown, ArrowUp } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

import { colors } from '@/common/theme/colors';
import { styles } from './product-sort.styles';

interface ProductSortProps {
  sortOption: {
    field: 'price' | 'rating';
    order: 'asc' | 'desc';
  };
  onSortChange: (field: 'price' | 'rating', order: 'asc' | 'desc') => void;
}

export function ProductSort({ sortOption, onSortChange }: ProductSortProps) {
  const { field, order } = sortOption;

  const toggleOrder = (currentField: 'price' | 'rating') => {
    if (currentField === field) {
      onSortChange(field, order === 'asc' ? 'desc' : 'asc');
    } else {
      onSortChange(currentField, 'asc');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort by:</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.sortButton,
            field === 'price' && styles.activeSortButton,
          ]}
          onPress={() => toggleOrder('price')}
        >
          <Text
            style={[
              styles.sortButtonText,
              field === 'price' && styles.activeSortButtonText,
            ]}
          >
            Price
          </Text>
          {field === 'price' &&
            (order === 'asc' ? (
              <ArrowUp size={16} color={colors.white} />
            ) : (
              <ArrowDown size={16} color={colors.white} />
            ))}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sortButton,
            field === 'rating' && styles.activeSortButton,
          ]}
          onPress={() => toggleOrder('rating')}
        >
          <Text
            style={[
              styles.sortButtonText,
              field === 'rating' && styles.activeSortButtonText,
            ]}
          >
            Rating
          </Text>
          {field === 'rating' &&
            (order === 'asc' ? (
              <ArrowUp size={16} color={colors.white} />
            ) : (
              <ArrowDown size={16} color={colors.white} />
            ))}
        </TouchableOpacity>
      </View>
    </View>
  );
}
