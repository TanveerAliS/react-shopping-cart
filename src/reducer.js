import { combineReducers } from 'redux';

import products from './model/products/ProductsReducer';
import cart from './model/cart/CartReducer';


export default combineReducers({
  products,
  cart,
});