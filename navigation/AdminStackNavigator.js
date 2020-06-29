import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductsScreen.tsx';
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

const AdminStackNavigator = createStackNavigator();

const AdminNavigator = () => (
  <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
    <AdminStackNavigator.Screen
      name="UserProducts"
      component={UserProductsScreen}
      options={{ title: 'Your products' }}
    />
    <AdminStackNavigator.Screen
      name="EditProduct"
      component={EditProductScreen}
    />
  </AdminStackNavigator.Navigator>
);

export default AdminNavigator;
