import React from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import CardItem from './CartItem.tsx';

type TOrderItem = {
  amount: number,
  date: Date,
}

const OrderItem = ({ amount, date }: TOrderItem) => (
  <View style={styles.orderItem}>
    <View style={styles.summary}>
      <Text style={styles.totalAmount}>{`$${amount.toFixed(2)}`}</Text>
      <Text style={styles.date}>
        {date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
    <Button title="Show details" onPress={() => {}} color={Colors.primary} />
  </View>
);

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
});

export default OrderItem;
