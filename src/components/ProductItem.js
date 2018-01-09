import React, { PureComponent } from 'react';

export default class ProductItem extends PureComponent {
  render() {
    const { title, price, imgUrl, discount, ptype, addToCart } = this.props;
    return (
      <div className="box">
        {(discount > 0) ?
          <div className="discountRibbon"> {discount}% Off</div> : null}
        <div className="imgWrap">
          <img src={imgUrl} />
        </div>
        <div className="detailsWrap">
          <div className="title">{title}</div>
          <strike><i>${price}</i></strike>
          <span className="price">${(discount > 0) ? price * ((100 - discount) / 100) : price}</span>
          <a className="button js-add-product" onClick={addToCart} href="#" title="Add to cart">
            Add to cart
          </a>
        </div>
      </div>
    )
  }
}