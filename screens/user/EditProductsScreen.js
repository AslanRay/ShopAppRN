import React, { useLayoutEffect, useState, useEffect, useCallback } from 'react';
import {
  Text, View, ScrollView, StyleSheet, TextInput, Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SaveProductIcon from '../../components/ui/SaveProductIcon';
import Fonts from '../../constants/Fonts';
import { createProduct, updateProduct } from '../../redux/product';

const EditProductScreen = ({ navigation, route }) => {
  const productId = route.params?.productId ?? '';

  const editedProduct = useSelector((state) => state.productReducer.userProducts
    .find((product) => product.id === productId));
  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : '',
  );
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : '',
  );
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: productId ? 'Edit your product' : 'Add your product',
      headerRight: () => (
        <SaveProductIcon saveHandler={submitHandler} />
      ),
    });
  }, [navigation, submitHandler, productId, title, imageUrl, description, price]);
  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(updateProduct(productId, title, imageUrl, description));
    } else {
      dispatch(createProduct(title, imageUrl, description, +price));
    }
    navigation.goBack();
  }, [description, dispatch, editedProduct, imageUrl, price, productId, title, navigation]);
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: wp('5%'),
  },
  formControl: {
    width: wp('100%'),
  },
  label: {
    fontFamily: Fonts.OpenSansBold,
    marginVertical: hp('1'),
  },
  input: {
    paddingHorizontal: wp('0.5%'),
    paddingVertical: hp('0.2%'),
    borderBottomColor: '#ccc',
    borderBottomWidth: wp('0.3%'),
  },
});

export default EditProductScreen;
