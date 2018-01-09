import React, { PureComponent } from 'react';

import ProductListContainer from './containers/ProductListContainer';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <ProductListContainer />
      </div>
    )
  }
}

