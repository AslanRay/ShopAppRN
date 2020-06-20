import PRODUCTS from '../data/dummyData';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === 'u1'),
};

export const productReducer = (state = initialState, action) => {
  return state;
}
