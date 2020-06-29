import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { productReducer } from './redux/product';
import { cartReducer } from './redux/cart';
import { ordersReducer } from './redux/orders';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  ordersReducer,
});

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  </Provider>
);

export default App;
