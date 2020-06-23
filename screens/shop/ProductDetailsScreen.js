import React, { useLayoutEffect } from 'react';
import {
  Text, View, StyleSheet, Button, Alert, ScrollView, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { addToCart } from '../../redux/cart';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

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
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          title="Add to cart"
          color={Colors.primary}
          onPress={() => {
            dispatch(addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>{`$${selectedProduct.price.toFixed(2)}`}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
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
  actions: {
    marginVertical: hp('2%'),
    alignItems: 'center',
  },
  image: {
    width: wp('100%'),
    height: hp('40%'),
  },
  price: {
    fontSize: wp('6%'),
    color: '#888',
    textAlign: 'center',
    marginVertical: hp('1%'),
    fontFamily: Fonts.OpenSansBold,
  },
  description: {
    fontSize: wp('4.5%'),
    textAlign: 'center',
    marginHorizontal: wp('5%'),
    fontFamily: Fonts.OpenSansRegular,
  },
});

export default ProductDetailsScreen;
