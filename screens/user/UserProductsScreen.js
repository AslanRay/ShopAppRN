import React, { useLayoutEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem.tsx';
import DrawerMenuButton from '../../components/ui/DrawerMenu';
import AddProductIcon from '../../components/ui/AddProductIcon';
import { deleteProduct } from '../../redux/product';

const UserProductsScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state.productReducer.userProducts);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<DrawerMenuButton />),
      headerRight: () => (<AddProductIcon />),
    });
  }, [navigation]);
  const dispatch = useDispatch();
  const editProductHandler = (id) => {
    navigation.navigate('EditProduct', { productId: id });
  };
  return (
    <View>
      <FlatList
        data={userProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onEditProduct={() => {
              editProductHandler(itemData.item.id);
            }}
            onDeleteProduct={() => {
              Alert.alert('Delte item', `Are you sure you want to delete the ${itemData.item.title} item?`, [
                {
                  text: 'No', style: 'default',
                },
                {
                  text: 'Yes',
                  style: 'destructive',
                  onPress: () => dispatch(deleteProduct(itemData.item.id)),
                },
              ]);
            }}
            isUserProductScreen
          />
        )}
      />
    </View>
  );
};

export default UserProductsScreen;
