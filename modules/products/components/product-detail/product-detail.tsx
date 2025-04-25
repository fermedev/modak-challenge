import { colors } from '@/common/theme/colors';
import { SingleProductReponse } from '@/modules/products/types/product';
import { Image } from 'expo-image';
import { Box, ShoppingCart, Star, Tag, Truck } from 'lucide-react-native';
import { PropsWithChildren } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { styles } from './product-detail.styles';

type ProductDetailProps = {
  product: SingleProductReponse;
};

export function ProductDetail({
  product,
}: PropsWithChildren<ProductDetailProps>) {
  const dimensions = useWindowDimensions();

  function handleAddToCart() {}
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Image */}
        <Image
          source={{ uri: product.images[0] ?? product.thumbnail }}
          style={[styles.mainImage, { height: dimensions.width * 0.8 }]}
          contentFit='cover'
          cachePolicy='memory-disk'
        />

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.brand}>{product.brand}</Text>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.ratingContainer}>
              <Star size={16} color={colors.yellow} fill={colors.yellow} />
              <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            {product.discountPercentage > 0 && (
              <View style={styles.discountContainer}>
                <Text style={styles.originalPrice}>
                  $
                  {Math.round(
                    product.price / (1 - product.discountPercentage / 100),
                  )}
                </Text>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>
                    {Math.round(product.discountPercentage)}% OFF
                  </Text>
                </View>
              </View>
            )}
          </View>

          {/* Product Details */}
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Tag size={20} color={colors.text.secondary} />
              <Text style={styles.detailLabel}>Category</Text>
              <Text style={styles.detailValue}>{product.category}</Text>
            </View>

            <View style={styles.detailItem}>
              <Box size={20} color={colors.text.secondary} />
              <Text style={styles.detailLabel}>Stock</Text>
              <Text
                style={[
                  styles.detailValue,
                  product.stock > 0 ? styles.inStock : styles.outOfStock,
                ]}
              >
                {product.stock > 0 ? `${product.stock} units` : 'Out of stock'}
              </Text>
            </View>
          </View>

          <View style={styles.deliveryInfo}>
            <Truck size={20} color={colors.success} />
            <Text style={styles.deliveryText}>
              Free shipping on orders over $50
            </Text>
          </View>
        </View>
      </ScrollView>
      {product && (
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.addToCartButton}
            onPress={handleAddToCart}
            disabled={product?.stock <= 0}
          >
            <ShoppingCart size={20} color={colors.white} />
            <Text style={styles.addToCartText}>
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
