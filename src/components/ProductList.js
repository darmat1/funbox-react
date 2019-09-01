import React, { Component } from "react";
import './ProductList.scss';
import Product from "./Product";

class ProductList extends Component {
  constructor(props){
    super(props);
  }
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
          bottomPromoSelected={c.bottomPromoSelected}
          bottomPromoDisabled={c.bottomPromoDisabled}
          weight={c.weight}
          units={c.units}
          isAvailable={c.isAvailable}
        />)}
      </div>
    );
  }
}

export default ProductList;