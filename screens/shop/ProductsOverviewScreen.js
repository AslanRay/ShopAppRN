import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Proptype from 'prop-types';
import ProductItem from '../../components/shop/ProductItem.tsx';

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.productReducer.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => navigation.navigate('ProductDetail', {
            productId: itemData.item.id,
            productTitle: itemData.item.title,
          })}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductOverviewScreen.propTypes = {
  navigation: Proptype.shape({
    navigate: Proptype.func.isRequired,
  }).isRequired,
};

export const productOverviewNavigationOptions = {
  headerTitle: 'All Products',
};

export default ProductOverviewScreen;
