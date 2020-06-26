import React from 'react';
import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const SaveProductIcon = ({ saveHandler }) => {
  return (
    <TouchableOpacity onPress={saveHandler}>
      <View style={styles.icon}>
        <Icon name="ios-checkmark" size={wp('10%')} color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: wp('5%'),
  },
});

export default SaveProductIcon;
