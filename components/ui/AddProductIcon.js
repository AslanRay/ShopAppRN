import React from 'react';
import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const AddProductIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('EditProduct')}>
      <View style={styles.icon}>
        <Icon name="ios-create" size={wp('7%')} color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: wp('5%'),
  },
});

export default AddProductIcon;
