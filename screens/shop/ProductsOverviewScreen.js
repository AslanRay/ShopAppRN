import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Proptype from 'prop-types';
import { Analytics, AWSKinesisProvider } from 'aws-amplify';
import { addToCart } from '../../redux/cart';
import ProductItem from '../../components/shop/ProductItem.tsx';
import CartHeaderButton from '../../components/ui/HeaderButton';
import DrawerMenuButton from '../../components/ui/DrawerMenu';

Analytics.addPluggable(new AWSKinesisProvider());

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.productReducer.availableProducts);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<DrawerMenuButton />),
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
            Analytics.record({
              data: {
                name: 'OBJECT ADDED TO CART',
                attributes: {
                  objectName: itemData.item.title,
                },
              },
              streamName: 'AppShopDataStream',
            }, 'AWSKinesis');
            dispatch(addToCart(itemData.item));
          }}
          isProductOverViewScreen
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
