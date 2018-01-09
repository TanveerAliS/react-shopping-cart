import { Map } from 'immutable';
import ACTION_TYPE from './CartAction';

function cart(state = Map(), action) {
  // console.log("--------card state", JSON.stringify(state));
  console.log("action ---->", action);
  switch (action.type) {
    case ACTION_TYPE.ADD_TO_CART:
    case ACTION_TYPE.INCREMENT_PRODUCT:
      return state.set(
        action.productId,
        state.get(action.productId, 0) + 1
      );
    case ACTION_TYPE.DECREMENT_PRODUCT:
      return state.get(action.productId, 0) === 1
        ? state.remove(action.productId)
        : state.set(
          action.productId,
          state.get(action.productId) - 1,
        );
    case ACTION_TYPE.CHECKOUT:
      return Map();
    default:
      return state;
  }
}

export const getCount = state => state.cart.count;

export default cart;