import React from 'react';
import {} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import ProductOverviewScreen, { productOverviewNavigationOptions } from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? Colors.navigationTextTitle : Colors.primary,
};

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => (
  <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
    <ProductsStackNavigator.Screen
      name="ProductsOverview"
      component={ProductOverviewScreen}
      options={productOverviewNavigationOptions}
    />
    {/* <ProductsStackNavigator.Screen
      name="ProductDetail"
      component={ProductDetailsScreen}
    />
    <ProductsStackNavigator.Screen
      name="Cart"
      component={CartScreen}
    /> */}
  </ProductsStackNavigator.Navigator>
);
