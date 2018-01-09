const ACTION_TYPE = {
  ADD_TO_CART: 'ADD_TO_CART',
  INCREMENT_PRODUCT: 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT: 'DECREMENT_PRODUCT',
  CHECKOUT: 'CHECKOUT',
}

export default ACTION_TYPE;

export function addProductToCart(id) {
  return {
    type: ACTION_TYPE.ADD_TO_CART,
    productId: id
  }
}

export function incrementProductNum(id) {
  return {
    type: ACTION_TYPE.INCREMENT_PRODUCT,
    productId: id,
    count: 1
  }
}

export function decrementProductNum(id) {
  return {
    type: ACTION_TYPE.DECREMENT_PRODUCT,
    productId: id,
  }
}

export function checkout() {
  return { type: ACTION_TYPE.CHECKOUT };
}