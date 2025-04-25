import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '@/common/theme/colors';
import { useFetchCategories } from '@/features/products/queries/useFetchCategories';
import { styles } from './product-filter.styles';

type ProductFilterProps = {
  onCategoryChange: (category: string | null) => void;
  selectedCategory: string | null;
};

export function ProductFilter({
  onCategoryChange,
  selectedCategory,
}: ProductFilterProps) {
  const { data: categories = [], isPending, isError } = useFetchCategories();
  if (isPending) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='small' color={colors.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load categories</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === null && styles.selectedCategoryButton,
          ]}
          onPress={() => onCategoryChange(null)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === null && styles.selectedCategoryText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        {categories.map((category) => (
          <TouchableOpacity
            key={category.slug}
            style={[
              styles.categoryButton,
              selectedCategory === category.slug &&
                styles.selectedCategoryButton,
            ]}
            onPress={() => onCategoryChange(category.slug)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.slug &&
                  styles.selectedCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
