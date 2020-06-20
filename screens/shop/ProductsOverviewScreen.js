import React from 'react';
import { FlatList, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem.tsx';

const ProductOverviewScreen = () => {
  const products = useSelector((state) => state.productReducer.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => Alert.alert('hello')}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export const productOverviewNavigationOptions = {
  headerTitle: 'All Products',
};

export default ProductOverviewScreen;
