import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProductsNavigator from './ShopNavigator';

const AppNavigator = () => (
  <NavigationContainer>
    <ProductsNavigator />
  </NavigationContainer>
);

export default AppNavigator;
