import React, { useLayoutEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import DrawerMenuButton from '../../components/ui/DrawerMenu';
import OrderItem from '../../components/shop/OrderItem.tsx';

const OrdersScreen = ({ navigation }) => {
  const orders = useSelector((state) => state.ordersReducer.orders);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<DrawerMenuButton />),
    });
  }, [navigation]);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.date}
          items={itemData.item.items}
        />
      )}
    />
  );
};

export default OrdersScreen;
