import React, { useState } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import moment from 'moment';
import CardItem from './CartItem.tsx';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

type TOrderItem = {
  amount: number,
  date: Date,
  items: [],
}

type TCartItem = {
  productId: string,
  quantity: number,
  sum: number,
  productTitle: string,
}

const OrderItem = ({ amount, date, items }: TOrderItem) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{`$${amount.toFixed(2)}`}</Text>
        <Text style={styles.date}>
          {moment(date).format('MMMM Do YYYY, hh:mm')}
        </Text>
      </View>
      <Button
        title={showDetails ? 'Hide details' : 'Show details'}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
        color={Colors.primary}
      />
      {
        showDetails && (
        <View style={styles.details}>
          {items.map((cartItem: TCartItem) => (
            <CardItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    margin: wp('4%'),
    padding: wp('4%'),
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('100%'),
    marginBottom: hp('2%'),
  },
  totalAmount: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: wp('5%'),
    paddingLeft: wp('7%'),
  },
  date: {
    fontFamily: Fonts.OpenSansRegular,
    fontSize: wp('5%'),
    color: '#888',
    paddingRight: wp('7%'),
  },
  details: {
    width: '100%',
  },
});

export default OrderItem;
