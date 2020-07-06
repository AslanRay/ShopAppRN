/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Text, View, StyleSheet, Image, Button, NativeSyntheticEvent, NativeTouchEvent,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

type TProduct = {
  image: string,
  title: string,
  price: number,
  onViewDetail: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
  onAddToCart: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
  isProductOverViewScreen: boolean
  isUserProductScreen: boolean,
  onEditProduct: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
  onDeleteProduct: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
}

const ProductItem = ({
  image,
  title,
  price,
  onViewDetail,
  onAddToCart,
  isProductOverViewScreen,
  isUserProductScreen,
  onDeleteProduct,
  onEditProduct,
}: TProduct) => (
  <View style={styles.product}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
    <View style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
    </View>
    {isProductOverViewScreen && (
    <View style={styles.actions}>
      <Button color={Colors.primary} title="View Details" onPress={onViewDetail} />
      <Button color={Colors.primary} title="Add to Cart" onPress={onAddToCart} />
    </View>
    )}
    {isUserProductScreen && (
    <View style={styles.actions}>
      <Button color={Colors.primary} title="Edit" onPress={onEditProduct} />
      <Button color={Colors.primary} title="Delete" onPress={onDeleteProduct} />
    </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  product: {
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    height: hp('32%'),
    margin: wp('5%'),
  },
  imageContainer: {
    width: wp('90%'),
    height: hp('20%'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: wp('90%'),
    height: hp('20%'),
  },
  details: {
    alignItems: 'center',
    height: hp('7%'),
    padding: wp('1%'),
  },
  title: {
    fontSize: wp('5%'),
    marginVertical: hp('0.5%'),
    fontFamily: Fonts.OpenSansBold,
  },
  price: {
    fontSize: wp('4%'),
    color: '#888',
    fontFamily: Fonts.OpenSansRegular,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('5%'),
    paddingHorizontal: wp('5%'),
  },
});

export default ProductItem;
