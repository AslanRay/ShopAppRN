/* eslint-disable no-restricted-syntax */
/* eslint-disable semi */
/* eslint-disable guard-for-in */
import React from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Font from '../../constants/Fonts';
import Color from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem.tsx';
import { removeFromCart } from '../../redux/cart'
import { addOrder } from '../../redux/orders';

const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state.cartReducer.totalAmount);
  const cartItems = useSelector((state) => {
    const cartItemsArray = [];
    for (const key in state.cartReducer.items) {
      cartItemsArray.push({
        productId: key,
        productTitle: state.cartReducer.items[key].productTitle,
        productPrice: state.cartReducer.items[key].productPrice,
        quantity: state.cartReducer.items[key].quantity,
        sum: state.cartReducer.items[key].sum,
      })
    }
    return cartItemsArray.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          {'Total: '}
          <Text style={styles.amountText}>
            {`$${cartTotalAmount.toFixed(2)}`}
          </Text>
        </Text>
        <Button
          title="Order now"
          onPress={() => {
            dispatch(addOrder(cartItems, cartTotalAmount))
          }}
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(key) => key.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(removeFromCart(itemData.item.productId));
            }}
            deletable
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: wp('5%'),
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: wp('5%'),
    padding: wp('2%'),
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  summaryText: {
    fontFamily: Font.OpenSansBold,
    fontSize: wp('6%'),
  },
  amountText: {
    color: Color.primary,
  },
});

export default CartScreen;
