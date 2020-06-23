import CartItem from '../models/cartItem.ts';

const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

const initialState = {
  items: {},
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  let updatedOrNewCartItem;
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice,
        );
      } else {
        updatedOrNewCartItem = CartItem(1, productPrice, productTitle, productPrice);
      }
      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.id]: updatedOrNewCartItem,
        },
        totalAmount: state.totalAmount + productPrice,
      };
    default:
      return state;
  }
};
