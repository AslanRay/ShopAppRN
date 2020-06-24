import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? Colors.navigationTextTitle : Colors.primary,
  headerTitleStyle: {
    fontFamily: Fonts.OpenSansBold,
  },
  headerBackTitleStyle: {
    fontFamily: Fonts.OpenSansRegular,
  },
};

const OrdersStackNavigator = createStackNavigator();

const OrdersNavigator = () => (
  <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
    <OrdersStackNavigator.Screen
      name="Orders"
      component={OrdersScreen}
      options={{ title: 'Your orders' }}
    />
  </OrdersStackNavigator.Navigator>
);

export default OrdersNavigator;
