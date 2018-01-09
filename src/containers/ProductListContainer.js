import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { productIsFetching, getProductList } from '../model/products/ProductsSelector';
import { getProducts } from '../model/products/ProductsAction';
import { addProductToCart } from '../model/cart/CartAction';
import { getCount } from '../model/cart/CartReducer';
import { getProductsInCart } from '../model/cart/CartSelector';
import Notifications, { notify } from 'react-notify-toast';
import CartContainer from './CartContainer';

function mapStateToProps(state) {
  return {
    loading: productIsFetching(state),
    products: getProductList(state),
    cartCount: getProductsInCart(state)
  }
}

function mapDispatchToProps(dispatch) {
  let myColor = { background: '#0E1717', text: "#FFFFFF" };
  return {
    getProducts() {
      dispatch(getProducts())
    },
    addToCart(id, name) {
      dispatch(addProductToCart(id))
      notify.show(`Success !! ` + name + ` added successfully`, "custom", 3000, myColor);
    }
  }
}

class ProductListContainer extends PureComponent {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { loading, products, addToCart, cartCount } = this.props;
    return (
      <section className="shop">
        <div className="shop__header">
          <h1 className="shop__title">All Items</h1>
          <Notifications />
          {
            (cartCount.length > 0) ? <p className="shop__text"><a className="button js-toggle-cart" href="/cart" onClick={this.goToCartPage} title="View cart">Go To cart - {cartCount.length}</a></p> : null
          }
        </div>
        <div className="shop__products">
          <div className="products">
            {
              loading &&
              <div className="loading-spinner"></div>
            }
            {
              products instanceof Array &&
              products.map(product => (
                <ProductItem
                  key={product.get('id')}
                  title={product.get('name')}
                  price={product.get('price')}
                  discount={product.get('discount')}
                  ptype={product.get('type')}
                  imgUrl={product.get('img_url')}
                  addToCart={addToCart.bind(null, product.get('id'), product.get('name'))}
                />
              ))
            }
          </div>
          {
            (cartCount.length > 0) ?
              <div className="cartSection">
                <CartContainer />
              </div>
              : null}
        </div>
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);