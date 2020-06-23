import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Proptype from 'prop-types';
import { addToCart } from '../../redux/cart';
import ProductItem from '../../components/shop/ProductItem.tsx';
import CartHeaderButton from '../../components/ui/HeaderButton';

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.productReducer.availableProducts);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (<CartHeaderButton />),
    });
  }, [navigation]);
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
          onAddToCart={() => {
            dispatch(addToCart(itemData.item));
          }}
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
