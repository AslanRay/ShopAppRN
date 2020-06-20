import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { productReducer } from './redux/product';
import ProductOverviewScreen from './screens/shop/ProductsOverviewScreen';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  productReducer,
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
