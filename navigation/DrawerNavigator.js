import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrdersStackNavigator from './OrdersStackNavigator';
import ProductsStackNavigator from './ProductsStackNavigator';
import AdminStackNavigator from './AdminStackNavigator';
import Colors from '../constants/Colors';
import ProductDrawerIcon from '../components/ui/ProductsDrawerIcon';
import OrdersDrawerIcon from '../components/ui/OrdersDrawerIcon';
import AdminDrawericon from '../components/ui/AdminDrawerIcon';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => (
  <DrawerNavigator.Navigator
    drawerContentOptions={{ activeTintColor: Colors.primary }}
    initialRouteName="Products"
  >
    <DrawerNavigator.Screen
      name="Products"
      component={ProductsStackNavigator}
      options={{
        drawerIcon: (drawerConfig) => (<ProductDrawerIcon tintColor={drawerConfig.color} />),
      }}
    />
    <DrawerNavigator.Screen
      name="Orders"
      component={OrdersStackNavigator}
      options={{
        drawerIcon: (drawerConfig) => (<OrdersDrawerIcon tintColor={drawerConfig.color} />),
      }}
    />
    <DrawerNavigator.Screen
      name="Admin"
      component={AdminStackNavigator}
      options={{
        drawerIcon: (drawerConfig) => (<AdminDrawericon tintColor={drawerConfig.color} />),
      }}
    />
  </DrawerNavigator.Navigator>
);

export default Drawer;
