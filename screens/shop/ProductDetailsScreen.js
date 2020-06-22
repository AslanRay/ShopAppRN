import React, { useLayoutEffect } from 'react';
import {
  Text, View, StyleSheet, Button, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetailsScreen = ({
  route,
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (<Button color={Colors.primary} title="LOL" onPress={() => Alert.alert(`${route.params.productTitle}`)} />),
    });
  }, [navigation, route.params.productTitle]);

  const { productId } = route.params;
  const selectedProduct = useSelector((state) => state.productReducer.availableProducts
    .find((product) => product.id === productId));
  return (
    <View>
      <Text>{JSON.stringify(selectedProduct)}</Text>
    </View>
  );
};

ProductDetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.objectOf({
      productId: PropTypes.string.isRequired,
      productTitle: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({

});

export default ProductDetailsScreen;
