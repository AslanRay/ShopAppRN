import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const HeaderButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <View style={styles.icon}>
        <Icon name="ios-cart" size={wp('7%')} color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: wp('5%'),
  },
});

export default HeaderButton;
