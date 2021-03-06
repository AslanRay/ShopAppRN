import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import ProductOverviewScreen, { productOverviewNavigationOptions } from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
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

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => (
  <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
    <ProductsStackNavigator.Screen
      name="ProductsOverview"
      component={ProductOverviewScreen}
      options={productOverviewNavigationOptions}
    />
    <ProductsStackNavigator.Screen
      name="ProductDetail"
      component={ProductDetailsScreen}
      options={({ route }) => ({
        title: route.params.productTitle,
      })}
    />
    <ProductsStackNavigator.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: 'Your cart' }}
    />
  </ProductsStackNavigator.Navigator>
);

export default ProductsNavigator;
