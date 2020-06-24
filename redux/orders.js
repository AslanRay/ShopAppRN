import Order from '../models/orders.ts';

const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartItem, totalAmount) => ({
  type: ADD_ORDER,
  orderData: {
    item: cartItem,
    amount: totalAmount,
  },
});

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      const newOrder = Order(
        new Date().toString(),
        action.orderData.item,
        action.orderData.amount,
        new Date(),
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    }
    default:
      return state;
  }
};
