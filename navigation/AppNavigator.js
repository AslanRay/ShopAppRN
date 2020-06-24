import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProductsStackNavigator from './ProductsStackNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
