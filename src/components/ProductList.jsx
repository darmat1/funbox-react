import React, { Component } from "react";
import '../styles/ProductList.scss';
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        {this.props.products.map(c => <Product
          key={c.id}
          name={c.name}
          classification={c.classification}
          topPromo={c.topPromo}
          description={c.description}
          bottomPromo={c.bottomPromo}
          weight={c.weight}
          units={c.units}
          isAvailable={c.isAvailable}
        />)}
      </div>
    );
  }
}

export default ProductList;