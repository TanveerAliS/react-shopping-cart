import { combineReducers } from 'redux';
import ACTION_TYPE from './ProductsAction';
import CART_ACTION_TYPE from '../cart/CartAction';

function isFetching(state = true, action) {
  switch (action.type) {
    case ACTION_TYPE.REQUEST_PRODUCTS:
      return true;
    case ACTION_TYPE.REQUEST_PRODUCTS_SUCCESS:
    case ACTION_TYPE.REQUEST_PRODUCTS_FAIL:
      return false;
    default:
      return state;
  }
}

function data(state = null, action) {
  switch (action.type) {
    case ACTION_TYPE.REQUEST_PRODUCTS_SUCCESS:
      return action.data;
    case CART_ACTION_TYPE.ADD_TO_CART:
    case CART_ACTION_TYPE.INCREMENT_PRODUCT:
      return state.setIn(
        [action.productId, 'inventory'],
        state.get(action.productId).get('inventory') - 1,
      )
    case CART_ACTION_TYPE.DECREMENT_PRODUCT:
      return state.setIn(
        [action.productId, 'inventory'],
        state.get(action.productId).get('inventory') + 1,
      )
    default:
      return state;
  }
}

export default combineReducers({
  isFetching,
  data,
})