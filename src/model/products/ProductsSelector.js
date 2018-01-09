import { createSelector } from 'reselect';

const productState = state => state.products;

export const productIsFetching = createSelector(
  [productState],
  products => products.isFetching,
);

export const getProductsData = createSelector(
  [productState],
  products => products.data,
);

export const getProductList = createSelector(
  [getProductsData],
  productData => productData && productData.toArray(),
)