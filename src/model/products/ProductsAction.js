import { OrderedMap, Map } from 'immutable';

const ACTION_TYPE = {
  REQUEST_PRODUCTS: 'REQUEST_PRODUCTS',
  REQUEST_PRODUCTS_SUCCESS: 'REQUEST_PRODUCTS_SUCCESS',
  REQUEST_PRODUCTS_FAIL: 'REQUEST_PRODUCTS_FAIL',

  // UPDATE_PRODUCTS_INFO: 'UPDATE_PRODUCTS_INFO',
}

export default ACTION_TYPE;

function fetchProducts() {
  return fetch("https://api.myjson.com/bins/qhnfp");
}

export function getProducts() {
  return (dispatch, getState) => {
    // const state = getState();
    // const category = getCategory(state);
    dispatch({ type: ACTION_TYPE.REQUEST_PRODUCTS });

    fetchProducts()
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        dispatch({
          type: ACTION_TYPE.REQUEST_PRODUCTS_SUCCESS,
          data: OrderedMap().withMutations((map) => {
            result.forEach((product) => {
              map.set(product.id, Map(product));
            });
          })
        })
      });
  }
}