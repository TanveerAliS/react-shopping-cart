import { createSelector } from 'reselect';
import { getProductsData } from '../products/ProductsSelector';

const cartState = state => state.cart;

export const getTotal = createSelector(
  [cartState, getProductsData],
  (cart, productsById) => {
    return cart.reduce((acc, num, id) => {
      const price = productsById.get(id).get('price');
      return acc + num * price;
    }, 0);
  }
)

export const getProductsInCart = createSelector(
  [cartState, getProductsData],
  (cart, productsById) => {
    return cart.keySeq().toArray().map((productId) => {
      const num = cart.get(productId);
      const product = productsById.get(productId);

      return {
        id: product.get('id'),
        title: product.get('name'),
        price: product.get('price'),
        discount: product.get('discount'),
        imgUrl: product.get('img_url'),
        num,
        hasInventory: product.get('inventory') > 0,
      }
    });
  }
)
