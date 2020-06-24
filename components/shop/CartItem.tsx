import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Font from '../../constants/Fonts';

type TCartItem = {
  quantity: number,
  title: string,
  amount: number,
  onRemove?: (x: any) => void,
  deletable?: boolean
}

const CartItem = ({
  quantity, title, amount, onRemove, deletable,
}: TCartItem) => (
  <View style={styles.cartItem}>
    <View style={styles.itemData}>
      <Text style={styles.quantity}>{quantity}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.itemData}>
      <Text style={styles.amount}>{`$${amount.toFixed(2)}`}</Text>
      { deletable && (
      <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
        <Icons
          name="ios-trash"
          color="red"
          size={wp('7%')}
        />
      </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  cartItem: {
    padding: wp('5%'),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: wp('4%'),
    fontFamily: Font.OpenSansRegular,
    color: '#888',
  },
  title: {
    fontSize: wp('4%'),
    fontFamily: Font.OpenSansBold,
    marginLeft: wp('2%'),
  },
  amount: {
    fontSize: wp('4%'),
    fontFamily: Font.OpenSansBold,
  },
  deleteButton: {
    marginLeft: wp('5%'),
  },
});

export default CartItem;
