import { colors } from '@/common/theme/colors';
import type { ProductsModel } from '@/features/products/models/products';
import { Image } from 'expo-image';
import { Star } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './product-card.styles';

type ProductCardProps = {
  product: ProductsModel;
  onPress: () => void;
};

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
        contentFit='cover'
        cachePolicy='memory-disk'
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <View style={styles.ratingContainer}>
          <Star size={14} color={colors.yellow} fill={colors.yellow} />
          <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${product.price}</Text>
          {product.discountPercentage > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>
                {Math.round(product.discountPercentage)}% OFF
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
