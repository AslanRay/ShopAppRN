import React from 'react';
import {
  StatusBar,
  YellowBox,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Smartlook from 'smartlook-react-native-wrapper';
import { productReducer } from './redux/product';
import { cartReducer } from './redux/cart';
import { ordersReducer } from './redux/orders';
import AppNavigator from './navigation/AppNavigator';

Smartlook.setupAndStartRecording('676bcd35b7b76b35c228759068ff9e8f8d875687');

YellowBox.ignoreWarnings(['Require cycle']);

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
