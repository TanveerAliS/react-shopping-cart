import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTotal, getProductsInCart } from '../model/cart/CartSelector';
import { incrementProductNum, decrementProductNum } from '../model/cart/CartAction';

function mapStateToProps(state) {
  return {
    products: getProductsInCart(state),
    total: getTotal(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment(id) {
      dispatch(incrementProductNum(id));
    },
    decrement(id) {
      dispatch(decrementProductNum(id));
    },
  }
}

class CartContainer extends PureComponent {
  render() {
    const { products, increment, decrement, total } = this.props;
    console.log(JSON.stringify(products))

    return (
      <div>
        <table className="cart-table">
          <caption className="slab-font">Order Summary</caption>
          <tr className="heading heading-font">
            <th className="cart-item pl">Items</th>
            <th className="cart-item-quantity">Quantity</th>
            <th className="cart-item-price">Price</th>
          </tr>
          {
            products.map((product) => (
              <tr key={product.id} className="item-row">
                <td className="cartItemtitle shadow"><img src={product.imgUrl} alt="" />
                  <span className="item-name">{product.title}</span>
                  <span className="removeBtn"><a href="#">Remove Item</a></span>
                </td>
                <td className="cart-item-quantity">
                  <input type="button" onClick={decrement.bind(null, product.id)} value="-" />
                  <span className="quantity">{product.num}</span>
                  <input type="button" onClick={increment.bind(null, product.id)} value="+" />
                </td>
                <td className="cart-item-price">
                  <p>${(product.discount > 0) ? product.price * ((100 - product.discount) / 100) : product.price}</p>
                </td>
              </tr>
            ))
          }
        </table>
        <div className="totalSection">
          <table class="cart-table">
            <caption class="slab-font">Total</caption>
            <tr >
              <th>Items</th>
              <th>Cost</th>
            </tr>
            <tr >
              <td>
                <p><a href="#">Total</a></p>
              </td>
              <td>
                <p>${total}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>

      // <div>
      //   {
      //     products.map((product) => (
      //       <div key={product.id}>
      //         <span>{product.title}</span> ${product.price}
      //         <button onClick={decrement.bind(null, product.id)}>-</button>
      //         <span>{product.num}</span>
      //         <button
      //           onClick={increment.bind(null, product.id)}
      //           disabled={!product.hasInventory}
      //         >
      //           +
      //         </button>
      //       </div>
      //   }
      // </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);