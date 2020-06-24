import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ProductDrawerIcon = ({
  tintColor,
}) => (
  <View>
    <Icon
      name="ios-cart"
      color={tintColor}
      size={wp('5%')}
    />
  </View>
);

export default ProductDrawerIcon;
