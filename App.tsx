import React, { useEffect } from 'react';
import {
  StatusBar,
  YellowBox,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import analytics from '@segment/analytics-react-native';
import Mixpanel from '@segment/analytics-react-native-mixpanel';
import { productReducer } from './redux/product';
import { cartReducer } from './redux/cart';
import { ordersReducer } from './redux/orders';
import AppNavigator from './navigation/AppNavigator';

YellowBox.ignoreWarnings(['Require cycle']);

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  ordersReducer,
});

const store = createStore(rootReducer);

const App = () => {
  const segmentInit = async () => {
    await analytics.setup('TSi8JG7cHFyfpMP8MKkE2PZKoIynVB1x', {
      // Record screen views automatically!
      recordScreenViews: true,
      // Record certain application events automatically!
      trackAppLifecycleEvents: true,
      using: [Mixpanel],
    }).then(() => console.log('Analytics is ready'))
      .catch((err) => console.error('Something went wrong', err));
  };

  const segmentUser = () => {
    analytics.identify('rviera@arkusnexus.com', {
      email: 'rviera@arkusnexus.com',
    });
  };
  useEffect(() => {
    segmentInit();
    segmentUser();
  }, []);
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </>
    </Provider>
  );
};

export default App;
